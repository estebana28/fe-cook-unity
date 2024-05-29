import { PokemonBattleView } from '@/views/PokemonBattleView'

type PokemonInfoProps = {
  params: {
    id: string
  }
}

export default function PokemonInfo({ params }: PokemonInfoProps) {
  const pokemonId = parseInt(params.id)

  return (
    <div>
      <PokemonBattleView pokemonId={pokemonId} />
    </div>
  )
}
