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
                            /api/book/details/:slug
                          </code>{" "}
                          - Get detailed information about a specific book
                        </li>
                        <li>
                          <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-xs">
                            /api/author/details/:slug
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
                            /api/book/details/:slug/reviews
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
                    <li>Rate limiting (100 requests per day per endpoint)</li>
                    <li>Comprehensive documentation</li>
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
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-6 hidden">
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
              href="mailto:ebrahimkha71@gmail.com"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              ebrahimkha71@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </motion.div>
  )
}
