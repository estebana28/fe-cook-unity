'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { Pokemon } from '@/stores'
import { BattleModal } from '@/components'
import { BattleButton } from '@/ui'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { getBattleResults } from '@/hooks/api/pokemon.api'

type BattleActionProps = {
  //disabledButton: boolean
}

export const BattleAction = ({}: BattleActionProps) => {
  const { contesterPokemon, againstPokemon } = usePokemonFacade()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [disableBattleButton, setDisableBattleButton] = useState(true)
  const [battleResult, setBattleResult] = useState('')

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleBattleResultsSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()
    if (contesterPokemon && againstPokemon) {
      const response = await getBattleResults(
        contesterPokemon.id.toString(),
        againstPokemon.id.toString(),
      )

      setBattleResult(response.result)
      handleOpenModal()
    }
  }

  useEffect(() => {
    if (againstPokemon) {
      setDisableBattleButton(false)
    }
  }, [againstPokemon])

  return (
    <div>
      <form onSubmit={handleBattleResultsSubmit}>
        <Image
          src="/versus.png"
          alt="versus image"
          width={200}
          height={400}
          priority
          className="w-full h-[150px] mb-8"
        />
        <BattleButton disabled={disableBattleButton} />
        {openModal && (
          <BattleModal onClose={handleCloseModal} battleResult={battleResult} />
        )}
      </form>
    </div>
  )
}
