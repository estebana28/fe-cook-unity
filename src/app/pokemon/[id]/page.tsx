import { Suspense } from 'react'
import { notFound } from 'next/navigation'
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

  if (contesterPokemon.message === 'ERROR_FINDING_POKEMON') {
    notFound()
  }

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
