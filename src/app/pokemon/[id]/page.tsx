import { Suspense } from 'react'
import type { Pokemon } from '@/stores'
import {
  getAllPokemons,
  getPokemonById,
  getPokemonsWithMoficators,
} from '@/hooks/api/pokemon.api'
import { SpinnerCUI } from '@/ui'
import { PokemonBattleView } from '@/views/PokemonBattleView'

type PokemonInfoProps = {
  params: {
    id: string
  }
}

export default async function PokemonInfo({ params }: PokemonInfoProps) {
  const pokemonId = params.id
  const contesterPokemon = await getPokemonById(pokemonId)
  const pokemonsDB: Pokemon[] = await getAllPokemons()
  const pokemonsWithModificators = await getPokemonsWithMoficators(pokemonId)
  console.log(pokemonsWithModificators)

  return (
    <>
      <Suspense fallback={<SpinnerCUI />}>
        <PokemonBattleView
          contesterPokemon={contesterPokemon}
          pokemonsDB={pokemonsDB}
          pokemonsWithModificators={pokemonsWithModificators}
        />
      </Suspense>
    </>
  )
}
