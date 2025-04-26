"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ChangelogPage() {
  return (
    <motion.div
      className="flex-1 p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Changelog</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          All notable changes to the Goodreads Scraper API are documented here. We follow{" "}
          <a
            href="https://semver.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Semantic Versioning
          </a>
          .
        </p>

        <div className="space-y-8">
          {/* Version 1.0.0 */}
          <div className="relative">
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-emerald-500 dark:bg-emerald-400 z-10"></div>
            <div className="absolute left-1.5 top-10 bottom-0 w-1 bg-slate-200 dark:bg-slate-700"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">1.0.0</h2>
                <Badge
                  variant="outline"
                  className="text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900"
                >
                  Latest
                </Badge>
                <span className="text-sm text-slate-500 dark:text-slate-400">April 25, 2024</span>
              </div>

              <Card className="mb-6 border-emerald-100 dark:border-emerald-900/30">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-emerald-600 dark:text-emerald-400">Added</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Initial public release of the Goodreads Scraper API</li>
                    <li>
                      Core endpoints:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">/api/lists</code>{" "}
                          - Get book lists by category, genre, or popularity
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/books/:id
                          </code>{" "}
                          - Get detailed information about a specific book
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/authors/:id
                          </code>{" "}
                          - Get detailed information about an author
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/search
                          </code>{" "}
                          - Search for books by title, author, or ISBN
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/users/:username/shelves
                          </code>{" "}
                          - Get a user's bookshelves and their books
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/books/:id/reviews
                          </code>{" "}
                          - Get reviews for a specific book
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/quotes
                          </code>{" "}
                          - Get quotes from a book or by an author
                        </li>
                      </ul>
                    </li>
                    <li>API key authentication system</li>
                    <li>Rate limiting (1,000 requests per day for free tier)</li>
                    <li>Comprehensive documentation</li>
                    <li>Official JavaScript and Python client libraries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Version 0.9.0 */}
          <div className="relative">
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 z-10"></div>
            <div className="absolute left-1.5 top-10 bottom-0 w-1 bg-slate-200 dark:bg-slate-700"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">0.9.0</h2>
                <Badge
                  variant="outline"
                  className="text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                >
                  Beta
                </Badge>
                <span className="text-sm text-slate-500 dark:text-slate-400">March 15, 2024</span>
              </div>

              <Card className="mb-4 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-emerald-600 dark:text-emerald-400">Added</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Beta release for selected partners</li>
                    <li>
                      Added{" "}
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">/api/quotes</code>{" "}
                      endpoint for retrieving book and author quotes
                    </li>
                    <li>Implemented pagination for all list-based endpoints</li>
                    <li>Added sorting options for reviews and search results</li>
                    <li>Expanded book details to include series information</li>
                    <li>Added similar books recommendations to book details</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-4 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-amber-600 dark:text-amber-400">Changed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Improved error handling with detailed error messages</li>
                    <li>Enhanced rate limiting with better header information</li>
                    <li>Optimized response times for all endpoints</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-600 dark:text-blue-400">Fixed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Fixed UTF-8 encoding issues with non-English book titles and author names</li>
                    <li>Resolved inconsistencies in date formatting across endpoints</li>
                    <li>Fixed search functionality to properly handle special characters</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Version 0.8.0 */}
          <div className="relative">
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-slate-400 dark:bg-slate-600 z-10"></div>
            <div className="absolute left-1.5 top-10 bottom-0 w-1 bg-slate-200 dark:bg-slate-700"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">0.8.0</h2>
                <Badge
                  variant="outline"
                  className="text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                >
                  Alpha
                </Badge>
                <span className="text-sm text-slate-500 dark:text-slate-400">February 10, 2024</span>
              </div>

              <Card className="mb-4 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-emerald-600 dark:text-emerald-400">Added</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Alpha release for internal testing</li>
                    <li>
                      Implemented core endpoints:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/books/:id
                          </code>
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/authors/:id
                          </code>
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/search
                          </code>
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">/api/lists</code>
                        </li>
                      </ul>
                    </li>
                    <li>Basic authentication system</li>
                    <li>Simple rate limiting</li>
                    <li>Initial documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6 border-slate-200 dark:border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-red-600 dark:text-red-400">Known Issues</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>Inconsistent date formatting across endpoints</li>
                    <li>Limited error handling</li>
                    <li>Performance issues with large result sets</li>
                    <li>No pagination for list-based endpoints</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upcoming Changes */}
          <div className="relative">
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 z-10"></div>
            <div className="pl-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Upcoming Changes</h2>
              </div>

              <Card className="mb-4 border-purple-100 dark:border-purple-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    Planned for v1.1.0
                    <Badge className="ml-2 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
                      Coming Soon
                    </Badge>
                  </CardTitle>
                  <CardDescription>Expected release: May 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>
                      New endpoint:{" "}
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">/api/genres</code> -
                      Get detailed information about book genres
                    </li>
                    <li>
                      New endpoint:{" "}
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                        /api/series/:id
                      </code>{" "}
                      - Get detailed information about book series
                    </li>
                    <li>Enhanced filtering options for search endpoint</li>
                    <li>Expanded author details with more biographical information</li>
                    <li>Support for bulk operations to reduce API calls</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-4 border-purple-100 dark:border-purple-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center">Planned for v1.2.0</CardTitle>
                  <CardDescription>Expected release: July 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>GraphQL API support alongside REST</li>
                    <li>WebSocket support for real-time updates</li>
                    <li>OAuth2 authentication option</li>
                    <li>Enhanced analytics for API usage</li>
                    <li>Improved caching mechanisms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6 border-red-100 dark:border-red-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                    Breaking Changes in v2.0.0
                  </CardTitle>
                  <CardDescription>Expected release: Q3 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>The response format will be standardized across all endpoints</li>
                    <li>Some fields will be renamed for consistency</li>
                    <li>
                      Authentication will require API keys to be passed in headers only (query parameters will be
                      deprecated)
                    </li>
                    <li>Rate limits will be adjusted based on usage patterns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Legacy Versions Support</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Version
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Support Status
                  </th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    End-of-Life Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    1.0.x
                  </td>
                  <td className="px-4 py-2 text-sm text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700">
                    Full Support
                  </td>
                  <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    TBD
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    0.9.x
                  </td>
                  <td className="px-4 py-2 text-sm text-amber-600 dark:text-amber-400 border border-slate-200 dark:border-slate-700">
                    Security Updates Only
                  </td>
                  <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    October 25, 2024
                  </td>
                </tr>
                <tr className="bg-white dark:bg-slate-900">
                  <td className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700">
                    0.8.x
                  </td>
                  <td className="px-4 py-2 text-sm text-red-600 dark:text-red-400 border border-slate-200 dark:border-slate-700">
                    No Support
                  </td>
                  <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    April 25, 2024
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            For migration guides and assistance, please contact{" "}
            <a
              href="mailto:support@goodreads-scraper.com"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              support@goodreads-scraper.com
            </a>
            .
          </p>
        </div>
      </div>
    </motion.div>
  )
}
