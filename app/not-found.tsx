export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-8 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-2">Try the main navigation or go back home.</p>
      <a href="/" className="mt-6 inline-block underline">
        Return home
      </a>
    </main>
  )
}
