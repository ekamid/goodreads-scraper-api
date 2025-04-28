import { LRUCache } from 'lru-cache';
import { NextRequest } from 'next/server';
import { ApiEndPointID } from './api-endpoints';
import { env } from 'next-runtime-env';

/**
 * Environment Variables for Rate Limiting Configuration:
 * 
 * RATE_LIMIT_UNIQUE_TOKENS (default: 100)
 * - Maximum number of unique IP + endpoint combinations to track
 * - Each combination of IP address and endpoint counts as one token
 * - Once reached, oldest tokens are removed to make space for new ones
 * 
 * RATE_LIMIT_INTERVAL (default: 86400000 - 24 hours in milliseconds)
 * - Time window for rate limiting in milliseconds
 * - Counters reset after this interval
 * - Default is 24 hours (86400000ms)
 * 
 * RATE_LIMIT_DAILY (default: 100)
 * - Maximum number of requests allowed per IP per endpoint per day
 * - Separate counter for each endpoint
 * - Resets every 24 hours
 * 
 * Example:
 * If IP 1.2.3.4 makes requests to the book details endpoint:
 * - Counter starts at 0
 * - Increments with each request
 * - Blocks when reaches RATE_LIMIT_DAILY
 * - Resets after RATE_LIMIT_INTERVAL milliseconds
 */

type Options = {
  uniqueTokenPerInterval?: number
  interval?: number
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  
  if (forwarded) {
    // Get the first IP if multiple are present
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback to a default token if no IP can be determined
  return 'default_ip';
}

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: parseInt(env('RATE_LIMIT_UNIQUE_TOKENS') || '100'),
    ttl: parseInt(env('RATE_LIMIT_INTERVAL') || (24 * 60 * 60 * 1000).toString()),
  });

  return {
    check: (req: NextRequest, endpoint: ApiEndPointID) =>
      new Promise<void>((resolve, reject) => {
        const clientIp = getClientIp(req);
        const token = `${endpoint}_${clientIp}`;
        
        const tokenCount = (tokenCache.get(token) as number[]) || [0];
        const dailyLimit = parseInt(env('RATE_LIMIT_DAILY') || '100');
        
        if (tokenCount[0] === 0) {
          tokenCache.set(token, [1]);
          resolve();
        } else {
          const currentUsage = tokenCount[0];
          const isRateLimited = currentUsage >= dailyLimit;
          if (isRateLimited) {
            reject();
          } else {
            tokenCache.set(token, [currentUsage + 1]);
            resolve();
          }
        }
      }),
  };
}