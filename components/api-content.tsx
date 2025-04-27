"use client";

import { useState } from "react";
import type { Endpoint } from "@/lib/api-endpoints";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy, Play, CheckCircle2 } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { motion } from "framer-motion";
import { CopyBlock } from "@/components/copy-block";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface ApiContentProps {
  endpoint: Endpoint;
}

export function ApiContent({ endpoint }: ApiContentProps) {
  const [params, setParams] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState({
    javascript: false,
    typescript: false,
    python: false,
    nodejs: false,
    response: false
  });
  const [requestTime, setRequestTime] = useState<number | null>(null);

  const handleParamChange = (key: string, value: string) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  const handleTryIt = async () => {
    setLoading(true);
    setResponse(null);
    try {
      if (endpoint.id === "get-book-details") {
        const slug = params.slug;
        if (!slug) {
          throw new Error("Slug is required");
        }

        const startTime = performance.now();
        const response = await fetch(`/api/book/details/${slug}`);
        const endTime = performance.now();
        setRequestTime(endTime - startTime);

        const data = await response.json();
        setResponse(JSON.stringify(data, null, 2));
      } else if (endpoint.id === "get-author-details") {
        const slug = params.slug;
        if (!slug) {
          throw new Error("Slug is required");
        }

        const startTime = performance.now();
        const response = await fetch(`/api/author/details/${slug}`);
        const endTime = performance.now();
        setRequestTime(endTime - startTime);

        const data = await response.json();
        setResponse(JSON.stringify(data, null, 2));
      }
    } catch (error) {
      setResponse(
        JSON.stringify(
          {
            error: "Failed to fetch author details",
            message: error instanceof Error ? error.message : "Unknown error",
          },
          null,
          2
        )
      );
      setRequestTime(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = (language: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopied({ ...copied, [language]: true });
    setTimeout(() => {
      setCopied({ ...copied, [language]: false });
    }, 2000);
  };

  const handleCopyResponse = async (response: any) => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(response, null, 2));
      setCopied({ ...copied, response: true });
      setTimeout(() => {
        setCopied({ ...copied, response: false });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy response:', err);
    }
  };

  return (
    <motion.div
      className="flex-1 p-6 overflow-y-auto bg-slate-50 dark:bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-4">
          {endpoint.method && (
            <Badge
              variant={endpoint.method === "GET" ? "default" : "destructive"}
              className="mr-2"
            >
              {endpoint.method}
            </Badge>
          )}
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {endpoint.name}
          </h1>
        </div>

        <p className="text-slate-600 dark:text-slate-400 mb-6">
          {endpoint.description}
        </p>

        <Tabs defaultValue="documentation">
          <TabsList className="mb-4">
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
            <TabsTrigger value="try-it">Try It</TabsTrigger>
            <TabsTrigger className="hidden" value="code-snippets">Code Snippets</TabsTrigger>
          </TabsList>

          <TabsContent value="documentation">
            <Card>
              <CardHeader>
                <CardTitle>Endpoint</CardTitle>
                {endpoint.url && (
                  <CardDescription>
                    Base URL:{" "}
                    <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">
                      {BASE_URL}
                    </code>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {endpoint.url && (
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-sm mb-6">
                    {endpoint.method} {endpoint.url}
                  </div>
                )}

                <h3 className="text-lg font-semibold mb-2">Parameters</h3>
                {endpoint.parameters.length > 0 ? (
                  <div className="border rounded-md overflow-hidden mb-6">
                    <table className="w-full">
                      <thead className="bg-slate-100 dark:bg-slate-800">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                            Name
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                            Type
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                            Required
                          </th>
                          <th className="px-4 py-2 text-left text-sm font-medium text-slate-600 dark:text-slate-300">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                        {endpoint.parameters.map((param) => (
                          <tr
                            key={param.name}
                            className="bg-white dark:bg-slate-900"
                          >
                            <td className="px-4 py-2 text-sm font-medium text-slate-900 dark:text-white">
                              {param.name}
                            </td>
                            <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                              {param.type}
                            </td>
                            <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                              {param.required ? "Yes" : "No"}
                            </td>
                            <td className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400">
                              {param.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    No parameters required.
                  </p>
                )}

                {Object.keys(endpoint.exampleResponse).length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mb-2">Response</h3>
                    <div className="relative bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-sm overflow-auto max-h-96">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => handleCopyResponse(endpoint.exampleResponse)}
                      >
                        {copied.response ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <pre>
                        {JSON.stringify(endpoint.exampleResponse, null, 2)}
                      </pre>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="try-it">
            <Card>
              <CardHeader>
                <CardTitle>Try the API</CardTitle>
                <CardDescription>
                  Test the endpoint with your parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                <CopyBlock 
                  content={`${BASE_URL}/api/book/details/${params.slug || '{slug}'}`}
                  className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-sm mb-4"
                >
                  <div>
                    {BASE_URL}/api/book/details/{params.slug || '{slug}'}
                  </div>
                </CopyBlock>
                  {endpoint.parameters.map((param) => (
                    <div key={param.name}>
                      <Label htmlFor={param.name}>
                        {param.name}
                        <span className="text-red-500">*</span>
                      </Label>
                      {param.type === "select" ? (
                        <Select
                          onValueChange={(value) =>
                            handleParamChange(param.name, value)
                          }
                        >
                          <SelectTrigger id={param.name} className="mt-1">
                            <SelectValue placeholder={`Select ${param.name}`} />
                          </SelectTrigger>
                          <SelectContent>
                            {param.options?.map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          id={param.name}
                          placeholder={
                            param.placeholder || `Enter ${param.name}`
                          }
                          value={params[param.name]}
                          className="mt-1"
                          onChange={(e) =>
                            handleParamChange(param.name, e.target.value)
                          }
                        />
                      )}
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {param.description}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleTryIt}
                  disabled={
                    loading ||
                    (endpoint.id === "get-book-details" && !params.slug)
                  }
                  className="mb-6 bg-emerald-600 hover:bg-emerald-700"
                >
                  {loading ? "Loading..." : "Execute Request"}
                  {!loading && <Play className="ml-2 h-4 w-4" />}
                </Button>

                {response && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Response</h3>
                    {requestTime && (
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                        Request completed in {requestTime.toFixed(2)}ms
                      </p>
                    )}
                    <CopyBlock 
                      content={response}
                      className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-sm overflow-auto max-h-96"
                    >
                      <pre>{response}</pre>
                    </CopyBlock>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="code-snippets">
            <Card>
              <CardHeader>
                <CardTitle>Code Snippets</CardTitle>
                <CardDescription>
                  Implementation examples in different languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {endpoint.codeSnippets.javascript && (
                    <AccordionItem value="javascript">
                      <AccordionTrigger>JavaScript (Fetch)</AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() =>
                              handleCopyCode(
                                "javascript",
                                endpoint.codeSnippets.javascript
                              )
                            }
                          >
                            {copied.javascript ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <CodeBlock
                            language="javascript"
                            code={endpoint.codeSnippets.javascript}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {endpoint.codeSnippets.typescript && (
                    <AccordionItem value="typescript">
                      <AccordionTrigger>TypeScript (Axios)</AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() =>
                              handleCopyCode(
                                "typescript",
                                endpoint.codeSnippets.typescript
                              )
                            }
                          >
                            {copied.typescript ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <CodeBlock
                            language="typescript"
                            code={endpoint.codeSnippets.typescript}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {endpoint.codeSnippets.python && (
                    <AccordionItem value="python">
                      <AccordionTrigger>Python (Requests)</AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() =>
                              handleCopyCode(
                                "python",
                                endpoint.codeSnippets.python
                              )
                            }
                          >
                            {copied.python ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <CodeBlock
                            language="python"
                            code={endpoint.codeSnippets.python}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}

                  {endpoint.codeSnippets.nodejs && (
                    <AccordionItem value="nodejs">
                      <AccordionTrigger>Node.js (Next.js)</AccordionTrigger>
                      <AccordionContent>
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() =>
                              handleCopyCode(
                                "nodejs",
                                endpoint.codeSnippets.nodejs
                              )
                            }
                          >
                            {copied.nodejs ? (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                          <CodeBlock
                            language="typescript"
                            code={endpoint.codeSnippets.nodejs}
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
}
