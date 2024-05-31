'use client'

import { SearchCUI } from '@/ui/inputs/SearchCUI'
import { SelectStringCUI } from '@/ui/selects/SelectStringCUI'
import { usePokemonStore } from '@/stores'
import { useState } from 'react'

export const Filter = () => {
  const {
    filterPokemonsListByName,
    filterPokemonsListByExpansion,
    filterPokemonsListByType,
    getPokemonsTypes,
  } = usePokemonStore()
  const [filterState, setFilterState] = useState({
    name: '',
    type: 'all',
    expansion: '',
  })

  const pokemonsTypes = getPokemonsTypes()

  const handleSearcByNameInput = (value: string) => {
    filterPokemonsListByName(value)
    setFilterState({ type: 'all', name: value, expansion: '' })
  }

  const handleSearcByExpansionInput = (value: string) => {
    filterPokemonsListByExpansion(value)
    setFilterState({ type: 'all', name: '', expansion: value })
  }

  const handleSelectByType = (value: string) => {
    filterPokemonsListByType(value)
    setFilterState({ type: value, name: '', expansion: '' })
  }

  return (
    <div className="mx-auto md:mx-10 fixed  top-10 bg-gray-500/50 rounded-md h-28 md:h-14 flex flex-row items-center justify-between w-[90%] backdrop-blur-md">
      <div className="ml-2 text-xl font-extrabold text-brightPurple">
        Pokemon App
      </div>
      <div className="flex flex-col md:flex-row gap-1">
        <SearchCUI
          placeholder="Search by name"
          onChange={handleSearcByNameInput}
          value={filterState.name}
        />
        <SearchCUI
          placeholder="Search by expansion"
          onChange={handleSearcByExpansionInput}
          value={filterState.expansion}
        />
        <SelectStringCUI
          placeholder="Filter by type"
          options={pokemonsTypes}
          onChange={handleSelectByType}
          value={filterState.type}
          width={180}
        />
      </div>
    </div>
  )
}
