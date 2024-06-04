'use client'

import { PrimaryButtonCUI } from '@/ui'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex h-full w-full absolute flex-col items-center justify-center">
      <h2 className="text-center text-white mb-4">
        Oops! Something went wrong!
      </h2>
      <Link href="/">
        <PrimaryButtonCUI
          text="Return Home"
          onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => reset()
          }
        />
      </Link>
    </main>
  )
}
