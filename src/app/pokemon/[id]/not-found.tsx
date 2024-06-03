import Link from 'next/link'
import { PrimaryButton } from '@/ui'
import { MdCatchingPokemon } from 'react-icons/md'

export default function NotFound() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-2 text-white absolute">
      <MdCatchingPokemon className="w-10" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested pokemon.</p>
      <Link href="/pokemon">
        <PrimaryButton text="Return to Pokemon list" />
      </Link>
    </main>
  )
}
