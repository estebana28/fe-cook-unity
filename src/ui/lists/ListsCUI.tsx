'use client'

import { useEffect } from 'react'
import { Pokemon } from '@/stores'
import { PokemonCardCUI } from '../cards/PokemonCardCUI'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'

type ListsCUIProps = {
  pokemonsDB: Pokemon[]
}

export const ListsCUI = ({ pokemonsDB }: ListsCUIProps) => {
  const { setPokemons, filteredPokemons } = usePokemonFacade()

  useEffect(() => {
    setPokemons(pokemonsDB)
  }, [pokemonsDB, setPokemons])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-48 md:mt-32 mb-4">
      {filteredPokemons.map((card) => (
        <PokemonCardCUI key={card.id} cardData={card} />
      ))}
    </div>
  )
}
