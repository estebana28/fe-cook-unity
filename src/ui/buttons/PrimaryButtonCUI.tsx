import React from 'react'

type PrimaryButtonProps = {
  text: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const PrimaryButtonCUI = ({ text, onClick }: PrimaryButtonProps) => {
  return (
    <button
      className="text-gray-100 rounded-3xl bg-darkPurple hover:bg-brightPurple px-4 py-2 shadow-md shadow-gray-500"
      onClick={onClick}
      data-testid="primary-button"
    >
      {text}
    </button>
  )
}
