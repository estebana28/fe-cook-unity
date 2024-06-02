import { Filter } from '@/components/Filter'
import { getAllPokemons } from '@/hooks/api/pokemon.api'
import { Pokemon } from '@/stores'
import { ListsCUI } from '@/ui/lists/ListsCUI'
import { SpinnerCUI } from '@/ui/loaders/Spinner'
import { Skeleton } from '@radix-ui/themes'
import { Suspense } from 'react'

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
