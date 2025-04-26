"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { Endpoint } from "@/lib/api-endpoints"
import {
  BookOpen,
  User,
  Search,
  BookmarkIcon,
  ListFilter,
  MessageSquare,
  Quote,
  Info,
  Github,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  History,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ApiSidebarProps {
  endpoints: Endpoint[]
  activeEndpoint: string
  setActiveEndpoint: (id: string) => void
}

export function ApiSidebar({ endpoints, activeEndpoint, setActiveEndpoint }: ApiSidebarProps) {
  const [isEndpointsOpen, setIsEndpointsOpen] = useState(true)
  const [isResourcesOpen, setIsResourcesOpen] = useState(true)

  const getIcon = (id: string) => {
    switch (id) {
      case "get-book-lists":
        return <ListFilter className="h-5 w-5" />
      case "get-book-details":
        return <BookOpen className="h-5 w-5" />
      case "get-author-details":
        return <User className="h-5 w-5" />
      case "search-books":
        return <Search className="h-5 w-5" />
      case "get-user-shelves":
        return <BookmarkIcon className="h-5 w-5" />
      case "get-book-reviews":
        return <MessageSquare className="h-5 w-5" />
      case "get-book-quotes":
        return <Quote className="h-5 w-5" />
      case "about":
        return <Info className="h-5 w-5" />
      case "changelog":
        return <History className="h-5 w-5" />
      case "status":
        return <Activity className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  const handleReportIssue = () => {
    window.open("https://github.com/goodreads-api/issues/new", "_blank")
  }

  return (
    <div className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 md:h-screen md:sticky md:top-0 md:left-0 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Goodreads Scraper API</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">API Documentation</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-4">
            <button
              onClick={() => setIsEndpointsOpen(!isEndpointsOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 px-3 py-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              API Endpoints
              {isEndpointsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {isEndpointsOpen && (
              <nav className="space-y-1">
                {endpoints
                  .filter((endpoint) => endpoint.id !== "about" && endpoint.id !== "changelog")
                  .map((endpoint) => (
                    <button
                      key={endpoint.id}
                      onClick={() => setActiveEndpoint(endpoint.id)}
                      className={cn(
                        "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                        activeEndpoint === endpoint.id
                          ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                      )}
                    >
                      <span
                        className={cn(
                          "mr-2",
                          activeEndpoint === endpoint.id
                            ? "text-emerald-500 dark:text-emerald-400"
                            : "text-slate-500 dark:text-slate-400",
                        )}
                      >
                        {getIcon(endpoint.id)}
                      </span>
                      {endpoint.name}
                      {endpoint.method && (
                        <span
                          className={cn(
                            "ml-auto text-xs px-1.5 py-0.5 rounded-full",
                            endpoint.method === "GET"
                              ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400",
                          )}
                        >
                          {endpoint.method}
                        </span>
                      )}
                    </button>
                  ))}
              </nav>
            )}
          </div>

          <div className="mb-4">
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 px-3 py-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Resources
              {isResourcesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {isResourcesOpen && (
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveEndpoint("about")}
                  className={cn(
                    "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                    activeEndpoint === "about"
                      ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "mr-2",
                      activeEndpoint === "about"
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400",
                    )}
                  >
                    <Info className="h-5 w-5" />
                  </span>
                  About
                </button>

                <button
                  onClick={() => setActiveEndpoint("changelog")}
                  className={cn(
                    "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                    activeEndpoint === "changelog"
                      ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "mr-2",
                      activeEndpoint === "changelog"
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400",
                    )}
                  >
                    <History className="h-5 w-5" />
                  </span>
                  Changelog
                </button>

                <button
                  onClick={() => setActiveEndpoint("status")}
                  className={cn(
                    "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                    activeEndpoint === "status"
                      ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white",
                  )}
                >
                  <span
                    className={cn(
                      "mr-2",
                      activeEndpoint === "status"
                        ? "text-emerald-500 dark:text-emerald-400"
                        : "text-slate-500 dark:text-slate-400",
                    )}
                  >
                    <Activity className="h-5 w-5" />
                  </span>
                  API Status
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-300 dark:border-slate-700"
                onClick={handleReportIssue}
              >
                <Github className="h-4 w-4" />
                <span>Report Issue</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create an issue on GitHub</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <AlertTriangle className="h-3 w-3" />
          <span>API Status: Operational</span>
        </div>
      </div>
    </div>
  )
}
