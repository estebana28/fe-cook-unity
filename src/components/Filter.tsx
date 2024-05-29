'use client'

import React from 'react'
import { SelectCUI } from '@/ui/selects/SelectCUI'
import { SearchCUI } from '@/ui/inputs/SearchCUI'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'

export const Filter = () => {
  const { pokemons } = usePokemonFacade()

  return (
    <div className="mx-auto md:mx-10 fixed  top-10 bg-gray-500/50 rounded-md h-28 md:h-14 flex flex-row items-center justify-between w-[90%] backdrop-blur-md">
      <div className="ml-2 text-xl font-extrabold text-brightPurple">
        Pokemon App
      </div>
      <div className="flex flex-col md:flex-row gap-1">
        <SearchCUI placeholder="Search by name" />
        <SearchCUI placeholder="Search by expansion" />
        <SelectCUI options={pokemons} width={180} />
      </div>
    </div>
  )
}
