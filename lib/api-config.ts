import { env } from "next-runtime-env";
import { rateLimit } from "./rate-limit";

export const API_CONFIG = {
  userAgent: env("NEXT_PUBLIC_USER_AGENT") || 
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
  baseURL: "https://www.goodreads.com",
  rateLimit: rateLimit({
    interval: 24 * 60 * 60 * 1000, // 1 minute
    uniqueTokenPerInterval: 500 // Max 500 users per minute
  })
};

export const fetchWithConfig = async (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: new Headers({
      "User-Agent": API_CONFIG.userAgent
    })
  });
};