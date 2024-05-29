import { usePokemonStore } from '@/stores'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllPokemons = async () => {
  const response = await fetch(`${API_URL}/pokemon`)
  const data = await response.json()
  return data
}
