'use client'

import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { Pokemon } from '@/stores'
import { useEffect } from 'react'

type SetPokemonStateProps = {
  pokemonsData: Pokemon[]
}

export const SetPokemonState = ({ pokemonsData }: SetPokemonStateProps) => {
  const { setPokemons } = usePokemonFacade()
  useEffect(() => {
    if (pokemonsData) {
      setPokemons(pokemonsData)
    }
  }, [])

  return <></>
}
