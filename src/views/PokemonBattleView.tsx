'use client'

import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { BattleButton } from '@/ui'
import { PokemonCardCUI } from '@/ui/cards/PokemonCardCUI'
import { SelectCUI } from '@/ui/selects/SelectCUI'
import Image from 'next/image'

type PokemonBattleViewProps = {
  pokemonId: number
}

export const PokemonBattleView = ({ pokemonId }: PokemonBattleViewProps) => {
  const { pokemons, getPokemon } = usePokemonFacade()
  const pokemon = getPokemon(pokemonId)

  return (
    <div className="flex flex-col flex-start gap-4 items-center justify-center md:grid md:grid-cols-[1fr_auto_1fr] my-10">
      <PokemonCardCUI cardData={pokemon} />
      <div className="flex flex-col items-center gap-12">
        <Image
          src="/versus.png"
          alt="versus image"
          width={200}
          height={400}
          priority
          className="w-full h-[150px]"
        />
        <BattleButton />
      </div>
      <div>
        <SelectCUI options={pokemons} width={200} />
      </div>
    </div>
  )
}
