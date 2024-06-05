'use client'

import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { SelectWithImagesCUI, PokemonCardCUI } from '@/ui'

export const AgainstPokemon = () => {
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
