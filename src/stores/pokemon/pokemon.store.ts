import { PokemonTypes } from '@/types/pokemon.types'
import { create } from 'zustand'

export type Type = [
  | 'NORMAL'
  | 'FIGHTING'
  | 'FLYING'
  | 'POISON'
  | 'GROUND'
  | 'ROCK'
  | 'BUG'
  | 'GHOST'
  | 'STEEL'
  | 'FIRE'
  | 'WATER'
  | 'GRASS'
  | 'ELECTRIC'
  | 'PSYCHIC'
  | 'ICE'
  | 'DRAGON'
  | 'DARK'
  | 'FAIRY',
]

export interface Pokemon {
  id: number
  name: string
  type: string
  description: string
  rarity: string
  expansion: string
  attack: number
  hp: number
  image: string
  weakness: Type[]
  resistance: Type[]
  createdAt: Date
  updatedAt: Date
}

export type PokemonState = {
  pokemons: Pokemon[]
  filteredPokemons: Pokemon[]
  contesterPokemon: Pokemon | null
  againstPokemon: Pokemon | null
}

export type Actions = {
  getPokemon: (name: string) => Pokemon | undefined
  getPokemonsTypes: () => PokemonTypes[]
  setPokemons: (value: Pokemon[]) => void
  setContesterPokemon: (value: Pokemon) => void
  setAgainstPokemon: (value: Pokemon) => void
  filterPokemonsListByType: (type: string) => void
  filterPokemonsListByName: (name: string) => void
  filterPokemonsListByExpansion: (expansion: string) => void
}

export type PokemonStore = PokemonState & Actions

export const usePokemonStore = create<PokemonStore>()((set, get) => ({
  pokemons: [],
  filteredPokemons: [],
  contesterPokemon: null,
  againstPokemon: null,
  setPokemons: (value) => set({ pokemons: value, filteredPokemons: value }),

  getPokemon: (name: string) =>
    get().pokemons.find((pokemon) => pokemon.name === name),

  getPokemonsTypes: () => {
    const pokemons = get().pokemons
    const pokemonsTypes: PokemonTypes[] = pokemons?.map((pokemon) => ({
      name: pokemon.type,
      value: pokemon.type,
    }))
    return pokemonsTypes
  },

  setContesterPokemon: (value) => set({ contesterPokemon: value }),

  setAgainstPokemon: (value) => set({ againstPokemon: value }),

  filterPokemonsListByName: (name) => {
    const pokemons = get().pokemons

    if (name === '') {
      set({ pokemons })
    }
    set({
      filteredPokemons: pokemons.filter((pokemon) =>
        pokemon.name.includes(name),
      ),
    })
  },

  filterPokemonsListByType: (type) => {
    const pokemons = get().pokemons
    if (type === 'all') {
      set({ pokemons })
    }
    set({
      filteredPokemons: pokemons.filter((pokemon) =>
        pokemon.type.includes(type),
      ),
    })
  },

  filterPokemonsListByExpansion: (expansion) => {
    const pokemons = get().pokemons
    if (expansion === '') {
      set({ pokemons })
    }
    set({
      filteredPokemons: pokemons.filter((pokemon) =>
        pokemon.expansion.includes(expansion),
      ),
    })
  },
}))
