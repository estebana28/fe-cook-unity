'use client'

import { PrimaryButton } from '@/ui'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full absolute">
      <h1 className="text-3xl text-gray-100 text-center mb-8">Pokemon App</h1>
      <Link href="/pokemon">
        <PrimaryButton text="Continue" />
      </Link>
    </div>
  )
}
