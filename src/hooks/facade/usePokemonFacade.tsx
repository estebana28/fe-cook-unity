import { usePokemonStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'

export const usePokemonFacade = () => {
  return usePokemonStore(
    useShallow((state) => ({
      pokemons: state.pokemons,
      filteredPokemons: state.filteredPokemons,
      contesterPokemon: state.contesterPokemon,
      againstPokemon: state.againstPokemon,
      getPokemon: state.getPokemon,
      setPokemons: state.setPokemons,
      setContesterPokemon: state.setContesterPokemon,
      setAgainstPokemon: state.setAgainstPokemon,
      getPokemonsTypes: state.getPokemonsTypes,
      filterPokemonsListByType: state.filterPokemonsListByType,
      filterPokemonsListByName: state.filterPokemonsListByName,
      filterPokemonsListByExpansion: state.filterPokemonsListByExpansion,
    })),
  )
}
