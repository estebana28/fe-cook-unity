'use client'
import * as Select from '@radix-ui/react-select'
import { FaAngleDown } from 'react-icons/fa'
import { capitalizeString } from '@/lib/auxiliary'
import { PokemonTypes } from '@/types/pokemon.types'

type SelectStringCUIProps = {
  placeholder: string
  options: PokemonTypes[]
  width?: number
  onChange?: (value: string) => void | undefined
  value?: string
}

export const SelectStringCUI = ({
  placeholder,
  options,
  width,
  onChange,
  value,
}: SelectStringCUIProps) => {
  return (
    <div
      className="h-8 bg-gray-300 rounded-md mx-2 text-darkPurple"
      data-testid="select-type-input"
      style={{ width }}
    >
      <Select.Root
        value={value}
        onValueChange={(id) => onChange && onChange(id)}
      >
        <Select.SelectGroup className="h-full">
          <Select.Trigger className="px-2 flex flex-row items-center justify-between w-full h-full">
            <Select.SelectValue placeholder={placeholder} />
            <Select.SelectIcon className="text-brightPurple font-bold">
              <FaAngleDown />
            </Select.SelectIcon>
          </Select.Trigger>
        </Select.SelectGroup>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="bg-gray-100 border-1 border-gray-500 rounded-b-md w-full"
          >
            <Select.SelectItem
              value="all"
              className="text-brightPurple"
              style={{ width }}
            >
              <Select.SelectItemText className="flex flex-row justify-center items-center w-full">
                {placeholder}
              </Select.SelectItemText>
            </Select.SelectItem>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.name}
                className="text-gray-500"
              >
                <Select.ItemText>
                  {capitalizeString(option.name)}
                </Select.ItemText>
              </Select.Item>
            ))}
            <Select.Separator className="bg-gray-500" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
