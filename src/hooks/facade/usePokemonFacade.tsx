import { usePokemonStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'

export const usePokemonFacade = () => {
  return usePokemonStore(
    useShallow((state) => ({
      pokemons: state.pokemons,
      getPokemon: state.getPokemon,
      setPokemons: state.setPokemons,
    })),
  )
}
