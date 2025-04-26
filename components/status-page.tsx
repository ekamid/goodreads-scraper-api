"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Activity, CheckCircle2, Clock, AlertTriangle, XCircle, ArrowUpRight } from "lucide-react"

export function StatusPage() {
  return (
    <motion.div
      className="flex-1 p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">API Status</h1>
          <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 px-3 py-1 text-sm">
            All Systems Operational
          </Badge>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-8">
          This page provides real-time and historical data on system performance and availability. Last updated: April
          26, 2024 at 18:08 UTC
        </p>

        <div className="space-y-6">
          <Card className="border-emerald-100 dark:border-emerald-900/30">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-emerald-500" />
                Current Status
              </CardTitle>
              <CardDescription>Real-time status of all API services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="font-medium text-slate-900 dark:text-white">API Endpoints</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Operational
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="font-medium text-slate-900 dark:text-white">Authentication Services</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Operational
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="font-medium text-slate-900 dark:text-white">Database Services</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Operational
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-100 dark:bg-slate-800 rounded-md">
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
                    <span className="font-medium text-slate-900 dark:text-white">Documentation</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Operational
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-slate-500" />
                Incident History
              </CardTitle>
              <CardDescription>Recent incidents and their resolutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4 py-1">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    <h3 className="font-medium text-slate-900 dark:text-white">Degraded Performance</h3>
                    <Badge className="ml-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Resolved
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    April 15, 2024 - Some users experienced increased latency when using the search endpoint.
                  </p>
                  <div className="text-xs text-slate-500 dark:text-slate-500 space-y-1">
                    <p>
                      <span className="font-medium">10:15 UTC</span> - Issue detected
                    </p>
                    <p>
                      <span className="font-medium">10:45 UTC</span> - Identified database query optimization issue
                    </p>
                    <p>
                      <span className="font-medium">11:30 UTC</span> - Deployed fix and restored normal operation
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-1">
                  <div className="flex items-center mb-2">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <h3 className="font-medium text-slate-900 dark:text-white">Service Disruption</h3>
                    <Badge className="ml-2 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Resolved
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    March 22, 2024 - Authentication service was unavailable for approximately 25 minutes.
                  </p>
                  <div className="text-xs text-slate-500 dark:text-slate-500 space-y-1">
                    <p>
                      <span className="font-medium">14:30 UTC</span> - Authentication failures reported
                    </p>
                    <p>
                      <span className="font-medium">14:40 UTC</span> - Identified issue with authentication service
                    </p>
                    <p>
                      <span className="font-medium">14:55 UTC</span> - Service restored after emergency maintenance
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowUpRight className="mr-2 h-5 w-5 text-slate-500" />
                API Performance
              </CardTitle>
              <CardDescription>Average response times over the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Search Endpoint</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">245ms</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "24.5%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Book Details Endpoint
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">187ms</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "18.7%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Author Details Endpoint
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">210ms</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "21%" }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Reviews Endpoint</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">320ms</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs text-slate-500 dark:text-slate-400 flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>Updated every 5 minutes</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
