'use client'

import { useEffect } from 'react'
import type { Pokemon } from '@/stores'
import {
  ContesterPokemon,
  AgainstPokemon,
  BattleAction,
  PokemonsWithModificators,
} from '@/components'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'

type PokemonBattleViewProps = {
  contesterPokemon: Pokemon
  pokemonsDB: Pokemon[]
  pokemonsWithModificators?: {
    weakAgainst: Pokemon[][] | null
    strongAgainst: Pokemon[][] | null
  }
}

export const PokemonBattleView = ({
  contesterPokemon,
  pokemonsDB,
  pokemonsWithModificators,
}: PokemonBattleViewProps) => {
  const { setPokemons, setContesterPokemon } = usePokemonFacade()

  useEffect(() => {
    setPokemons(pokemonsDB)
    setContesterPokemon(contesterPokemon)
  }, [pokemonsDB, setPokemons, setContesterPokemon, contesterPokemon])

  return (
    <>
      <div className="flex flex-col flex-start gap-4 justify-center md:flex-row md:h-full md:pt-32">
        <ContesterPokemon contesterPokemon={contesterPokemon} />
        <div className="flex flex-col items-center gap-12 mt-12">
          <BattleAction />
        </div>
        <div>
          <AgainstPokemon />
        </div>
      </div>
      <div className="mt-12 ml-12 flex justify-center">
        <PokemonsWithModificators
          pokemonsWithModificators={pokemonsWithModificators}
        />
      </div>
    </>
  )
}
