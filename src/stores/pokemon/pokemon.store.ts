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

export type Pokemon = {
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
}

export type Actions = {
  getPokemon: (name: string) => Pokemon | undefined
  getPokemonsTypes: () => PokemonTypes[]
  setPokemons: (value: Pokemon[]) => void
  filterPokemonsListByType: (type: string) => void
  filterPokemonsListByName: (name: string) => void
  filterPokemonsListByExpansion: (expansion: string) => void
}

export type PokemonStore = PokemonState & Actions

export const usePokemonStore = create<PokemonStore>()((set, get) => ({
  pokemons: [],
  filteredPokemons: [],
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

  filterPokemonsListByName: (name) => {
    const pokemons = get().pokemons
    console.log(pokemons, 'INSIDE FILTER NAME')

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
