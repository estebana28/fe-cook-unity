const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllPokemons = async () => {
  const response = await fetch(`${API_URL}/pokemon`)
  const data = await response.json()
  return data
}

export const getPokemonById = async (id: string) => {
  const response = await fetch(`${API_URL}/pokemon/${id}`)
  const data = await response.json()
  return data
}

export const getBattleResults = async (
  contesterPokemon: string,
  againstPokemon: string,
) => {
  const response = await fetch(
    `${API_URL}/pokemon/battle/${contesterPokemon}/${againstPokemon}`,
  )
  const data = await response.json()
  return data
}
