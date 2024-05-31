'use client'

import { useState } from 'react'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { Pokemon } from '@/stores'
import { BattleButton } from '@/ui'
import { PokemonCardCUI } from '@/ui/cards/PokemonCardCUI'
import Image from 'next/image'
import { BattleModal } from '@/components/BattleModal'
import { SelectWithImagesCUI } from '@/ui/selects/SelectWithImagesCUI'

type PokemonBattleViewProps = {
  pokemonName: string
}

export const PokemonBattleView = ({ pokemonName }: PokemonBattleViewProps) => {
  const [againstPokemon, setAgainstPokemon] = useState<Pokemon | undefined>()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const { pokemons, getPokemon } = usePokemonFacade()
  const pokemon = getPokemon(pokemonName)

  const handleSelectPokemon = (name: string) => {
    const pokemon = getPokemon(name)
    if (pokemon && name === 'all') {
      setAgainstPokemon(undefined)
    } else {
      setAgainstPokemon(pokemon)
    }
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <div className="flex flex-col flex-start gap-4 justify-center md:flex-row md:h-full md:pt-32">
      <PokemonCardCUI cardData={pokemon} />
      <div className="flex flex-col items-center gap-12 mt-12">
        <Image
          src="/versus.png"
          alt="versus image"
          width={200}
          height={400}
          priority
          className="w-full h-[150px]"
        />
        <BattleButton onClickProp={() => handleOpenModal()} />
      </div>
      <div>
        <div className={`${againstPokemon ? 'block m-06' : 'invisible'} mb-6`}>
          <PokemonCardCUI cardData={againstPokemon} />
        </div>
        <SelectWithImagesCUI
          options={pokemons}
          width={200}
          onChange={handleSelectPokemon}
          placeholder="Choose your opponent"
        />
      </div>
      {openModal && <BattleModal onClose={handleCloseModal} />}
    </div>
  )
}
