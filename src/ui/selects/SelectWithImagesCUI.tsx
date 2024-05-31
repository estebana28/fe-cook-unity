import * as Select from '@radix-ui/react-select'
import { FaAngleDown } from 'react-icons/fa'
import { Pokemon } from '@/stores'
import Image from 'next/image'
import { capitalizeString } from '@/lib/auxiliary'

type SelectWithImagesCUIProps = {
  placeholder: string
  options: Pokemon[]
  width?: number
  onChange?: (name: string) => void | undefined
}

export const SelectWithImagesCUI = ({
  placeholder,
  options,
  width,
  onChange,
}: SelectWithImagesCUIProps) => {
  return (
    <div className="h-8 bg-gray-300 rounded-md mx-2" style={{ width }}>
      <Select.Root onValueChange={(value) => onChange && onChange(value)}>
        <Select.SelectGroup className="h-full">
          <Select.Trigger className="px-2 flex flex-row items-center justify-between w-full h-full">
            <Select.SelectValue
              className="text-gray-500"
              placeholder={placeholder}
            />
            <Select.SelectIcon>
              <FaAngleDown />
            </Select.SelectIcon>
          </Select.Trigger>
        </Select.SelectGroup>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="bg-gray-100 border-1 border-gray-500 rounded-md w-full"
            style={{ width }}
          >
            <Select.SelectItem value="all" className="text-gray-500 w-full">
              <Select.SelectItemText className="flex flex-row justify-center items-center w-full">
                {placeholder}
              </Select.SelectItemText>
            </Select.SelectItem>
            {options.map((option) => (
              <Select.Item
                key={option.id}
                value={option.name}
                className="text-gray-500"
              >
                <Select.ItemText>
                  <div className="flex flex-row justify-center items-center">
                    {capitalizeString(option.name)}
                    <Image
                      src={option.image}
                      alt={option.name}
                      width={65}
                      height={65}
                    />
                  </div>
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
