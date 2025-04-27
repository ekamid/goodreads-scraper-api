"use client";

import { useEffect } from "react";
import { ApiContent } from "@/components/api-content";
import { endpoints } from "@/lib/api-endpoints";
import { useActiveEndpointContext } from "@/lib/active-endpoint-context";

export function ApiDocs() {
  const { activeEndpoint, setActiveEndpoint } = useActiveEndpointContext();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && endpoints.some((e) => e.id === hash)) {
      setActiveEndpoint(hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash && endpoints.some((e) => e.id === newHash)) {
        setActiveEndpoint(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [setActiveEndpoint]);

  const endpoint = endpoints.find((e) => e.id === activeEndpoint);

  // Remove console.log statements and handle no endpoint case
  if (!endpoint) {
    return null;
  }

  return <ApiContent endpoint={endpoint} />;
}
