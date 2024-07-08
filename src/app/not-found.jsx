import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <span>The page you are accessing does not exist</span>
      <Link href="/">Return to home page</Link>
    </div>
  )
}
