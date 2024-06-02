import { Pokemon } from '@/stores'

type PokemonsWithModificatorsProps = {
  pokemonsWithModificators?: {
    weakAgainst: Pokemon[][] | null
    strongAgainst: Pokemon[][] | null
  }
}

export const PokemonsWithModificators = ({
  pokemonsWithModificators,
}: PokemonsWithModificatorsProps) => {
  return (
    <div className="flex flex-row gap-12 text-white">
      <div>
        <h2 className="font-bold text-xl">Weak Against</h2>
        {pokemonsWithModificators?.weakAgainst?.[0].map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
      <div>
        <h2 className="font-bold text-xl">Strong Against</h2>
        {pokemonsWithModificators?.strongAgainst?.[0].map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </div>
  )
}
