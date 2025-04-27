"use client";

import { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Endpoint } from "@/lib/api-endpoints";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useActiveEndpointContext } from "@/lib/active-endpoint-context";

interface ApiSidebarProps {
  endpoints: Endpoint[];
  setActiveEndpoint: (id: string) => void;
}

export function ApiSidebar({
  endpoints,
}: Omit<ApiSidebarProps, "setActiveEndpoint">) {
  const { activeEndpoint, setActiveEndpoint } = useActiveEndpointContext();
  const [isEndpointsOpen, setIsEndpointsOpen] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(true);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const pathname = window.location.pathname;

    if (pathname === '/') {
      setActiveEndpoint('about');
    } else if (pathname === '/changelog') {
      setActiveEndpoint('changelog');
    } else if (hash && endpoints.some((e) => e.id === hash)) {
      setActiveEndpoint(hash);
    }
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "get-book-lists":
        return <ListFilter className="h-5 w-5" />;
      case "get-book-details":
        return <BookOpen className="h-5 w-5" />;
      case "get-author-details":
        return <User className="h-5 w-5" />;
      case "search-books":
        return <Search className="h-5 w-5" />;
      case "get-user-shelves":
        return <BookmarkIcon className="h-5 w-5" />;
      case "get-book-reviews":
        return <MessageSquare className="h-5 w-5" />;
      case "get-book-quotes":
        return <Quote className="h-5 w-5" />;
      case "about":
        return <Info className="h-5 w-5" />;
      case "changelog":
        return <History className="h-5 w-5" />;
      case "status":
        return <Activity className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const handleReportIssue = () => {
    window.open("https://github.com/goodreads-api/issues/new", "_blank");
  };

  return (
    <div className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 md:h-screen md:sticky md:top-0 md:left-0 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          Goodreads Scraper API
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          API Documentation
        </p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-4">
            <button
              onClick={() => setIsEndpointsOpen(!isEndpointsOpen)}
              className="flex items-center justify-between w-full text-sm font-medium text-slate-500 dark:text-slate-400 mb-2 px-3 py-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              API Endpoints
              {isEndpointsOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {isEndpointsOpen && (
              <nav className="space-y-1">
                {endpoints
                  .filter(
                    (endpoint) =>
                      endpoint.id !== "about" && endpoint.id !== "changelog"
                  )
                  .map((endpoint) => (
                    <Link
                      key={endpoint.id}
                      href={`/docs#${endpoint.id}`}
                      onClick={() => setActiveEndpoint(endpoint.id)}
                      className={cn(
                        "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
                        activeEndpoint === endpoint.id
                          ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                      )}
                    >
                      <span
                        className={cn(
                          "mr-2",
                          activeEndpoint === endpoint.id
                            ? "text-emerald-500 dark:text-emerald-400"
                            : "text-slate-500 dark:text-slate-400"
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
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                          )}
                        >
                          {endpoint.method}
                        </span>
                      )}
                    </Link>
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
              {isResourcesOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>

            {isResourcesOpen && (
              <nav className="space-y-1">
                <SidebarLink
                  href="/"
                  isActive={activeEndpoint === "about"}
                  icon={<Info className="h-5 w-5" />}
                  id="about"
                >
                  About
                </SidebarLink>

                <SidebarLink
                  href="/changelog"
                  isActive={activeEndpoint === "changelog"}
                  icon={<History className="h-5 w-5" />}
                  id="changelog"
                >
                  Changelog
                </SidebarLink>
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
  );
}

interface SidebarLinkProps {
  href: string;
  isActive: boolean;
  icon: ReactNode;
  children: ReactNode;
  id: string;
}

export function SidebarLink({
  href,
  isActive,
  icon,
  children,
  id,
}: SidebarLinkProps) {
  const { setActiveEndpoint } = useActiveEndpointContext();

  return (
    <Link
      href={href}
      onClick={() => setActiveEndpoint(id)}
      className={cn(
        "flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors",
        isActive
          ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-medium"
          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
      )}
    >
      <span
        className={cn(
          "mr-2",
          isActive
            ? "text-emerald-500 dark:text-emerald-400"
            : "text-slate-500 dark:text-slate-400"
        )}
      >
        {icon}
      </span>
      {children}
    </Link>
  );
}
