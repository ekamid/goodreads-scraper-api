"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ActiveEndpointContextType {
  activeEndpoint: string;
  setActiveEndpoint: (id: string) => void;
}

const ActiveEndpointContext = createContext<ActiveEndpointContextType | undefined>(undefined);

export function ApiProvider({ children }: { children: ReactNode }) {
  const [activeEndpoint, setActiveEndpoint] = useState("about");

  return (
    <ActiveEndpointContext.Provider value={{ activeEndpoint, setActiveEndpoint }}>
      {children}
    </ActiveEndpointContext.Provider>
  );
}

export function useActiveEndpointContext() {
  const context = useContext(ActiveEndpointContext);
  if (context === undefined) {
    throw new Error("useActiveEndpointContext must be used within an ApiProvider");
  }
  return context;
}