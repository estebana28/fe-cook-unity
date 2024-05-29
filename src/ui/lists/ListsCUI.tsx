import React from 'react'
import { PokemonCardCUI } from '../cards/PokemonCardCUI'
import { Pokemon } from '@/stores'

type ListCUIProps = {
  cardList: Pokemon[]
}

export const ListsCUI = ({ cardList }: ListCUIProps) => {
  return (
    <>
      {cardList && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-48 md:mt-32 mb-4">
          {cardList.map((card) => (
            <PokemonCardCUI key={card.id} cardData={card} />
          ))}
        </div>
      )}
    </>
  )
}
