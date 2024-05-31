import React from 'react'

type BattleButtonProps = {
  onClickProp?: React.MouseEventHandler<HTMLButtonElement>
}

export const BattleButton = ({ onClickProp }: BattleButtonProps) => {
  return (
    <div>
      <button
        onClick={onClickProp}
        className="text-red-900 font-bold text-2xl font-mono rounded-xl bg-orange hover:bg-peach px-6 py-4 shadow-md shadow-peach hover:shadow-orange duration-300 ease-in hover:scale-100 hover:-translate-y-1"
      >
        Battle!
      </button>
    </div>
  )
}
