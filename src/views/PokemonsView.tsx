'use client'

import { Suspense } from 'react'
import { Filter } from '@/components/Filter'
import { ListsCUI } from '@/ui/lists/ListsCUI'
import { SpinnerCUI } from '@/ui/loaders/Spinner'
import { usePokemonStore } from '@/stores'

export const PokemonsView = () => {
  const { filteredPokemons } = usePokemonStore()

  console.log(filteredPokemons)

  return (
    <div className="my-2 flex flex-col items-center">
      <Filter />
      <Suspense fallback={<SpinnerCUI />}>
        <ListsCUI cardList={filteredPokemons} />
      </Suspense>
    </div>
  )
}
