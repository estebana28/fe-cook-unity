import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { SearchCUI } from '@/ui'

describe('SearchCUI', () => {
  it('renders the input with correct placeholder', () => {
    const placeholderText = 'Search...'
    const { getByPlaceholderText } = render(
      <SearchCUI placeholder={placeholderText} />,
    )
    const inputElement = getByPlaceholderText(placeholderText)
    expect(inputElement).toBeInTheDocument()
  })

  it('calls the onChange function when input value changes', () => {
    const onChangeMock = jest.fn()
    const { getByPlaceholderText } = render(
      <SearchCUI placeholder="Search..." onChange={onChangeMock} />,
    )
    const inputElement = getByPlaceholderText('Search...')
    fireEvent.change(inputElement, { target: { value: 'pikachu' } })
    expect(onChangeMock).toHaveBeenCalledWith('pikachu')
  })

  it('displays the value in the input field', () => {
    const { getByPlaceholderText } = render(
      <SearchCUI placeholder="Search..." value="pikachu" />,
    )
    const inputElement = getByPlaceholderText('Search...')
    expect(inputElement).toHaveValue('pikachu')
  })
})
