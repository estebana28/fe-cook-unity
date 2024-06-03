import { capitalizeString } from '@/lib/auxiliary'
import { Pokemon } from '@/stores'

type PokemonsWithModificatorsProps = {
  pokemonsWithModificators: {
    weakAgainst: Pokemon[] | []
    resistantAgainst: Pokemon[] | []
  }
}

export const PokemonsWithModificators = ({
  pokemonsWithModificators,
}: PokemonsWithModificatorsProps) => {
  const weakAgainstList: Pokemon[] | [] = pokemonsWithModificators?.weakAgainst
  const resistantAgainstList: Pokemon[] | [] =
    pokemonsWithModificators?.resistantAgainst

  return (
    <div className="flex flex-row gap-12 text-white">
      <div>
        <h2 className="font-bold text-xl">Weak VS</h2>
        {weakAgainstList ? (
          weakAgainstList?.map((pokemon) => (
            <p className="text-center" key={pokemon.id}>
              {capitalizeString(pokemon.name)}
            </p>
          ))
        ) : (
          <p>No weak against</p>
        )}
      </div>
      <div>
        <h2 className="font-bold text-xl">Strong VS</h2>
        {resistantAgainstList ? (
          resistantAgainstList?.map((pokemon) => (
            <p className="text-center" key={pokemon.id}>
              {capitalizeString(pokemon.name)}
            </p>
          ))
        ) : (
          <p>No strong against</p>
        )}
      </div>
    </div>
  )
}
