import React from 'react'
import * as Select from '@radix-ui/react-select'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import { Pokemon } from '@/stores'
import Image from 'next/image'

type SelectCUIProps = {
  options: Pokemon[]
  width?: number
}

export const SelectCUI = ({ options, width }: SelectCUIProps) => {
  return (
    <div className="h-8 bg-gray-300 rounded-md mx-2" style={{ width }}>
      <Select.Root>
        <Select.SelectGroup className="h-full">
          <Select.Trigger className="px-2 flex flex-row items-center justify-between w-full h-full">
            <Select.SelectValue
              className="text-gray-500"
              placeholder="Pick a pokemon..."
            />
            <Select.SelectIcon>
              <ChevronDownIcon />
            </Select.SelectIcon>
          </Select.Trigger>
        </Select.SelectGroup>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="bg-gray-100 border-1 border-gray-500 rounded-b-md w-full"
          >
            <Select.SelectItem value="none" className="text-gray-500 w-full">
              <Select.SelectItemText className="flex flex-row justify-center items-center w-full">
                Pick a pokemon...
              </Select.SelectItemText>
            </Select.SelectItem>
            {options.map((option) => (
              <Select.Item
                key={option.id}
                value={option.name}
                className="text-gray-500 w-full"
              >
                <Select.ItemText className="flex flex-row justify-center items-center w-full">
                  <Image
                    src={option.image}
                    alt={option.name}
                    width={25}
                    height={25}
                  />
                  {option.name}
                </Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
            <Select.Separator className="bg-gray-500" />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  )
}
