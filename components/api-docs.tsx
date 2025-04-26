"use client";

import { useEffect } from "react";
import { ApiContent } from "@/components/api-content";
import { endpoints } from "@/lib/api-endpoints";
import { useApi } from "@/lib/api-context";

export function ApiDocs() {
  const { activeEndpoint, setActiveEndpoint } = useApi();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && endpoints.some(e => e.id === hash)) {
      setActiveEndpoint(hash);
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      if (newHash && endpoints.some(e => e.id === newHash)) {
        setActiveEndpoint(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setActiveEndpoint]);

  return (
    <ApiContent endpoint={endpoints.find((e) => e.id === activeEndpoint)!} />
  );
}