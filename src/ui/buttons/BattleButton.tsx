'use client'

type BattleButtonProps = {
  onClickProp?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export const BattleButton = ({ onClickProp, disabled }: BattleButtonProps) => {
  return (
    <div>
      <button
        disabled={disabled}
        type="submit"
        onClick={onClickProp}
        className="text-red-900 font-bold text-2xl font-mono rounded-xl bg-orange hover:bg-peach disabled:bg-gray-500 disabled:shadow-none px-6 py-4 shadow-md shadow-peach hover:shadow-orange duration-300 ease-in hover:scale-100 hover:-translate-y-1"
      >
        Battle!
      </button>
    </div>
  )
}
