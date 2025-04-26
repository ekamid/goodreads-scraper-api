interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-md font-mono text-sm overflow-auto max-h-96">
      <pre className="language-{language}">{code}</pre>
    </div>
  )
}
