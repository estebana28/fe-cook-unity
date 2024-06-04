import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { PrimaryButtonCUI } from '@/ui'

describe('PrimaryButton', () => {
  it('renders the button with correct text', () => {
    const buttonText = 'Click me'
    const { getByTestId } = render(<PrimaryButtonCUI text={buttonText} />)
    const buttonElement = getByTestId('primary-button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('calls the onClick function when button is clicked', async () => {
    const onClickMock = jest.fn()
    const { getByTestId } = render(
      <PrimaryButtonCUI text="Click me" onClick={onClickMock} />,
    )
    const buttonElement = getByTestId('primary-button')
    await fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalled()
  })
})
