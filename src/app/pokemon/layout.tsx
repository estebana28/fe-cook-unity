import type { Metadata } from 'next'
import { Navbar } from '@/components'

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'List of pokemons',
}

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
