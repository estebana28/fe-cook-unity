import React from 'react'

type SearchCUIProps = {
  placeholder: string
}

export const SearchCUI = ({ placeholder }: SearchCUIProps) => {
  const value = ''

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="h-8 w-[180px] bg-gray-300 rounded-md mx-2 pl-2 text-brightPurple placeholder-white focus:outline-none focus:border-brightPurple focus:border-2"
        value={value}
        onChange={() => {}}
      />
    </div>
  )
}
