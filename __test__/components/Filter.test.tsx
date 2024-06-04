import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Filter } from '@/components/Filter' // Ajusta la ruta según sea necesario
import { usePokemonFacade } from '@/hooks/facade/usePokemonFacade'

// Definimos el tipo del hook usePokemonFacade
type UsePokemonFacadeType = {
  filterPokemonsListByName: (name: string) => void
  filterPokemonsListByExpansion: (expansion: string) => void
  filterPokemonsListByType: (type: string) => void
  getPokemonsTypes: () => string[]
}

// Mock de usePokemonFacade
jest.mock('../../src/hooks/facade/usePokemonFacade')

const mockedUsePokemonFacade =
  usePokemonFacade as unknown as jest.MockedFunction<() => UsePokemonFacadeType>

describe('Filter Component', () => {
  const mockFilterPokemonsListByName = jest.fn()
  const mockFilterPokemonsListByExpansion = jest.fn()
  const mockFilterPokemonsListByType = jest.fn()
  const mockGetPokemonsTypes = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    mockedUsePokemonFacade.mockReturnValue({
      filterPokemonsListByName: mockFilterPokemonsListByName,
      filterPokemonsListByExpansion: mockFilterPokemonsListByExpansion,
      filterPokemonsListByType: mockFilterPokemonsListByType,
      getPokemonsTypes: mockGetPokemonsTypes,
    })
    mockGetPokemonsTypes.mockReturnValue(['all', 'fire', 'water'])
  })

  test('should render component', () => {
    render(<Filter />)
    expect(screen.getByText('Pokemon App')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search by expansion'),
    ).toBeInTheDocument()
    expect(screen.getByTestId('select-type-input')).toBeInTheDocument()
  })

  test('should call filterPokemonsListByName when typing in the name search input', () => {
    render(<Filter />)
    const input = screen.getByPlaceholderText('Search by name')
    fireEvent.change(input, { target: { value: 'Pikachu' } })
    expect(mockFilterPokemonsListByName).toHaveBeenCalledWith('Pikachu')
    expect(input).toHaveValue('Pikachu')
  })

  test('should call filterPokemonsListByExpansion when typing in the expansion search input', () => {
    render(<Filter />)
    const input = screen.getByPlaceholderText('Search by expansion')
    fireEvent.change(input, { target: { value: 'Base Set' } })
    expect(mockFilterPokemonsListByExpansion).toHaveBeenCalledWith('Base Set')
    expect(input).toHaveValue('Base Set')
  })
})
