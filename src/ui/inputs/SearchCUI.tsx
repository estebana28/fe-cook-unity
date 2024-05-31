import React from 'react'

type SearchCUIProps = {
  placeholder: string
  onChange?: (value: string) => void | undefined
  value?: string
}

export const SearchCUI = ({ placeholder, onChange, value }: SearchCUIProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="h-8 w-[180px] bg-gray-300 rounded-md mx-2 pl-2 text-brightPurple placeholder-darkPurple focus:outline-none focus:placeholder:text-white focus:border-brightPurple focus:border-2"
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value}
      />
    </div>
  )
}
