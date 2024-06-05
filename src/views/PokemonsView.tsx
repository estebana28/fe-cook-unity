import { Suspense } from 'react'
import { Filter } from '@/components'
import { ListsCUI, SpinnerCUI } from '@/ui'
import { getAllPokemons } from '@/hooks/api/pokemon.api'
import { Pokemon } from '@/stores'
import { Skeleton } from '@radix-ui/themes'

export const PokemonsView = async () => {
  const pokemonsDB: Pokemon[] = await getAllPokemons()

  return (
    <div className="my-2 flex flex-col items-center">
      <Skeleton loading={!pokemonsDB} className="w-40 h-8">
        <Filter />
      </Skeleton>

      <Suspense fallback={<SpinnerCUI />}>
        <ListsCUI pokemonsDB={pokemonsDB} />
      </Suspense>
    </div>
  )
}
