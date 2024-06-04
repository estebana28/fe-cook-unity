import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BattleButtonCUI } from '@/ui'

describe('BattleButtonCUI', () => {
  it('renders the button with correct text', () => {
    const { getByTestId } = render(<BattleButtonCUI onClickProp={() => {}} />)
    const buttonElement = getByTestId('battle-button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders the button with disabled attribute when disabled is true', () => {
    const { getByTestId } = render(
      <BattleButtonCUI onClickProp={() => {}} disabled />,
    )
    const buttonElement = getByTestId('battle-button')
    expect(buttonElement).toBeDisabled()
  })

  it('calls the onClickProp function when button is clicked', async () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <BattleButtonCUI onClickProp={handleClick} />,
    )
    await userEvent.click(getByTestId('battle-button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
