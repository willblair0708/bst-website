import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-grey-400 mb-6">Page not found</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent-pass text-white rounded-lg hover:bg-accent-pass/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}