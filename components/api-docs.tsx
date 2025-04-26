"use client"

import { useState, useEffect } from "react"
import { ApiSidebar } from "@/components/api-sidebar"
import { ApiContent } from "@/components/api-content"
import { endpoints } from "@/lib/api-endpoints"
import { AboutPage } from "@/components/about-page"
import { ChangelogPage } from "@/components/changelog-page"
import { StatusPage } from "@/components/status-page"

export function ApiDocs() {
  const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0].id)

  const renderContent = () => {
    switch (activeEndpoint) {
      case "about":
        return <AboutPage />
      case "changelog":
        return <ChangelogPage />
      case "status":
        return <StatusPage />
      default:
        return <ApiContent endpoint={endpoints.find((e) => e.id === activeEndpoint)!} />
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <ApiSidebar endpoints={endpoints} activeEndpoint={activeEndpoint} setActiveEndpoint={setActiveEndpoint} />
      {renderContent()}
    </div>
  )
}
