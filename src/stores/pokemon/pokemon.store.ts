import { get } from 'http'
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
}

export type Actions = {
  setPokemons: (value: Pokemon[]) => void
  getPokemon: (id: number) => Pokemon | undefined
}

export type PokemonStore = PokemonState & Actions

export const usePokemonStore = create<PokemonStore>()((set, get) => ({
  pokemons: [],

  getPokemon: (id: number) =>
    get().pokemons.find((pokemon) => pokemon.id === id),
  setPokemons: (value) => set({ pokemons: value }),
}))
