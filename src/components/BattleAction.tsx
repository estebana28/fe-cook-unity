'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { BattleModal } from '@/components'
import { BattleButtonCUI } from '@/ui'
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'
import { getBattleResults } from '@/hooks/api/pokemon.api'

export const BattleAction = () => {
  const { contesterPokemon, againstPokemon } = usePokemonFacade()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [disableBattleButtonCUI, setDisableBattleButtonCUI] = useState(true)
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
      setDisableBattleButtonCUI(false)
    }
  }, [againstPokemon])

  return (
    <form onSubmit={handleBattleResultsSubmit} data-test-id="battle-form">
      <Image
        src="/versus.png"
        alt="versus image"
        width={200}
        height={400}
        priority
        className="w-full h-[150px] mb-8"
      />
      <BattleButtonCUI disabled={disableBattleButtonCUI} />
      {openModal && (
        <BattleModal onClose={handleCloseModal} battleResult={battleResult} />
      )}
    </form>
  )
}
