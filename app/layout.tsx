import type { Metadata } from "next";
import "./globals.css";
import { ApiProvider } from "@/lib/api-context";
import { ApiSidebar } from "@/components/api-sidebar";
import { endpoints } from "@/lib/api-endpoints";

export const metadata: Metadata = {
  title: "Goodreads Scraper API",
  description:
    "A modern, RESTful API for accessing Goodreads data. Created as an alternative to the deprecated official Goodreads API.",
  generator: "Next.js",
  authors: [
    {
      name: "Ebrahim Khalil",
      url: "https://github.com/ekamid",
    },
  ],
  keywords: ["goodreads", "api", "books", "scraper", "reading", "library"],
  creator: "Ebrahim Khalil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
          <ApiProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
              <ApiSidebar endpoints={endpoints} />
              {children}
            </div>
          </ApiProvider>
        </main>
      </body>
    </html>
  );
}
