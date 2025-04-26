"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ApiContextType {
  activeEndpoint: string;
  setActiveEndpoint: (id: string) => void;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export function ApiProvider({ children }: { children: ReactNode }) {
  const [activeEndpoint, setActiveEndpoint] = useState("about");

  return (
    <ApiContext.Provider value={{ activeEndpoint, setActiveEndpoint }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const context = useContext(ApiContext);
  if (context === undefined) {
    throw new Error("useApi must be used within an ApiProvider");
  }
  return context;
}