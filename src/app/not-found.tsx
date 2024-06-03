import { PrimaryButton } from '@/ui'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center text-white flex flex-col items-center justify-center h-full w-full absolute">
      <h2>Not Found</h2>
      <p>It looks like yo got lost</p>
      <Link href="/">
        <PrimaryButton text="Return Home" />
      </Link>
    </div>
  )
}
