import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { PokemonCardCUI } from '@/ui'
import { Pokemon, Type } from '@/stores'

describe('PokemonCardCUI', () => {
  // Prueba cuando se renderiza el componente con datos válidos
  it('renders the card with correct data', async () => {
    const mockCardData: Pokemon = {
      id: 1,
      name: 'Pikachu',
      type: 'ELECTRIC',
      hp: 100,
      expansion: 'base',
      rarity: 'common',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      weakness: ['WATER' as unknown as Type],
      resistance: [],
      description: 'Pikachu is a electric-type Pokemon.',
      attack: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const { getByTestId, getByText } = await render(
      <PokemonCardCUI cardData={mockCardData} />,
    )
    const nameElement = getByText('Pikachu')
    expect(nameElement).toBeInTheDocument()

    const typeElement = getByTestId('pokemon-type')
    expect(typeElement).toBeInTheDocument()

    const imageElement = getByTestId('pokemon-image')
    expect(imageElement).toHaveAttribute('src')
  })

  it('renders nothing when cardData is null', () => {
    const { queryByTestId } = render(<PokemonCardCUI cardData={null} />)
    expect(queryByTestId('pokemon-card')).toBeNull()
  })

  it('renders the link with correct href', () => {
    const mockCardData = {
      id: 1,
      name: 'Pikachu',
      type: 'ELECTRIC',
      hp: 100,
      expansion: 'base',
      rarity: 'common',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      weakness: ['WATER' as unknown as Type],
      resistance: [],
      description: 'Pikachu is a electric-type Pokemon.',
      attack: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const { getByTestId } = render(<PokemonCardCUI cardData={mockCardData} />)
    const linkElement = getByTestId('pokemon-link')

    expect(linkElement).toHaveAttribute('href', '/pokemon/1')
  })

  it('applies correct gradient background based on the Pokémon type', () => {
    const mockCardData = {
      id: 1,
      name: 'Pikachu',
      type: 'ELECTRIC',
      hp: 100,
      expansion: 'base',
      rarity: 'common',
      image:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      weakness: ['WATER' as unknown as Type],
      resistance: [],
      description: 'Pikachu is a electric-type Pokemon.',
      attack: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    const { getByTestId } = render(<PokemonCardCUI cardData={mockCardData} />)
    const cardElement = getByTestId('pokemon-card')
    expect(cardElement).toHaveClass(
      'bg-gradient-to-b from-yellow-300 to-yellow-100',
    )
  })
})
