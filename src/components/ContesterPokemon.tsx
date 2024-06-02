'use client'

import type { Pokemon } from '@/stores'
import { PokemonCardCUI } from '@/ui/cards/PokemonCardCUI'

type ContesterPokemonProps = {
  contesterPokemon: Pokemon
}

export const ContesterPokemon = ({
  contesterPokemon,
}: ContesterPokemonProps) => {
  return (
    <div>
      <PokemonCardCUI cardData={contesterPokemon} />
    </div>
  )
}
