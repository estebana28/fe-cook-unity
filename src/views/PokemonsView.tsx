'use client'

import { Suspense, useEffect, useState } from 'react'
import { Filter } from '@/components/Filter'
import { PokemonCardCUI } from '@/ui/cards/PokemonCardCUI'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { Pokemon } from '@/stores'
import { ListsCUI } from '@/ui/lists/ListsCUI'

export const PokemonsView = () => {
  const { pokemons } = usePokemonFacade()

  console.log(pokemons)

  if (!pokemons) return <div>Loading...</div>

  return (
    <div className="my-2 flex flex-col items-center">
      <Filter />
      <Suspense fallback={<div>Loading...</div>}>
        <ListsCUI cardList={pokemons} />
      </Suspense>
    </div>
  )
}
