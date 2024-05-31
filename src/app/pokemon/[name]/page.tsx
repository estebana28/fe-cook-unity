import { PokemonBattleView } from '@/views/PokemonBattleView'

type PokemonInfoProps = {
  params: {
    name: string
  }
}

export default function PokemonInfo({ params }: PokemonInfoProps) {
  const pokemonName = params.name

  return (
    <div>
      <PokemonBattleView pokemonName={pokemonName} />
    </div>
  )
}
