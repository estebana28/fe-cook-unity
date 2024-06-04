'use client'

import { capitalizeString } from '@/lib/auxiliary'
import { Pokemon } from '@/stores'
import Image from 'next/image'
import Link from 'next/link'

const gradients: Record<string, string> = {
  ELECTRIC: 'bg-gradient-to-b from-yellow-300 to-yellow-100',
  FIRE: 'bg-gradient-to-b from-red-300 to-red-100',
  STEEL: 'bg-gradient-to-b from-gray-300 to-gray-100',
  GRASS: 'bg-gradient-to-b from-green-300 to-green-100',
  WATER: 'bg-gradient-to-b from-blue-300 to-blue-100',
  FIGHTING: 'bg-gradient-to-b from-amber-400 to-gray-100',
  DARK: 'bg-gradient-to-b from-violet-300 to-violet-100',
  BUG: 'bg-gradient-to-b from-lime-300 to-lime-100',
}

export type PokemonCardCUIProps = {
  cardData: Pokemon | null
}

export const PokemonCardCUI = ({ cardData }: PokemonCardCUIProps) => {
  return (
    <Link href={`/pokemon/${cardData?.id}`} data-testid="pokemon-link">
      {cardData && (
        <div
          className={`border-2 border-gray-500 rounded-xl w-70 h-100 grid-rows-3 p-3 text-gray-500 shadow-md duration-100 ease-in hover:scale-100 hover:-translate-y-1 shadow-gray-100 ${
            gradients[cardData.type]
          }`}
          data-testid="pokemon-card"
        >
          <div className="flex justify-between">
            <h1 className="font-bold">{capitalizeString(cardData.name)}</h1>
            <div>
              <p className="font-semibold">HP {cardData.hp}</p>
              <div>{/* Avatar with type */}</div>
            </div>
          </div>
          <div className="h-[200px] border-gray-500 border-2 rounded-lg my-3 bg-stone-200">
            <Image
              src={cardData.image}
              alt="pokemon"
              width={200}
              height={200}
              data-testid="pokemon-image"
            />
          </div>
          <div>
            <p className="font-semibold">
              Type:{' '}
              <span className="font-normal" data-testid="pokemon-type">
                {capitalizeString(cardData.type)}
              </span>
            </p>
            <p className="font-semibold">
              Expansion:{' '}
              <span className="font-normal">
                {capitalizeString(cardData.expansion)}
              </span>
            </p>
            <p className="font-semibold">
              Rarity:{' '}
              <span className="font-normal">
                {capitalizeString(cardData.rarity)}
              </span>
            </p>
          </div>
        </div>
      )}
    </Link>
  )
}
