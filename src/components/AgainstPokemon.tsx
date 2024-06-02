'use client'

import type { Pokemon } from '@/stores'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { SelectWithImagesCUI, PokemonCardCUI } from '@/ui'
import { useEffect } from 'react'

type AgainstPokemonProps = {
  //pokemonList: Pokemon[]
}

export const AgainstPokemon = ({}: AgainstPokemonProps) => {
  const { pokemons, getPokemon, setAgainstPokemon, againstPokemon } =
    usePokemonFacade()

  const handleSelectPokemon = (name: string) => {
    const pokemon = getPokemon(name)
    if (pokemon) {
      setAgainstPokemon(pokemon)
    }
  }

  return (
    <div>
      <div className="h-[320px]">
        {againstPokemon && <PokemonCardCUI cardData={againstPokemon} />}
      </div>
      <div className="mt-12">
        <SelectWithImagesCUI
          options={pokemons}
          width={200}
          onChange={handleSelectPokemon}
          placeholder="Choose your opponent"
        />
      </div>
    </div>
  )
}
