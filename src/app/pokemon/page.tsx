import { getAllPokemons } from '@/hooks/api/pokemon.api'
import { PokemonsView } from '@/views/PokemonsView'

export default async function PokemonsPage() {
  return (
    <>
      <PokemonsView />
    </>
  )
}
