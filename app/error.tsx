"use client"

import { useEffect } from "react"

export default function GlobalError({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body className="mx-auto max-w-2xl p-8 text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2">Please refresh or try again later.</p>
      </body>
    </html>
  )
}
