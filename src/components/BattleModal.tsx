import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

type BattleModalProps = {
  onClose: () => void
}

export const BattleModal = ({ onClose }: BattleModalProps) => {
  return (
    <Dialog.Root open>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-900/50 fixed inset-0" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-100 p-[25px]  focus:outline-none">
          <Dialog.Title className="text-darkPurple m-0 text-xl font-extrabold text-center">
            Battle results!!
          </Dialog.Title>
          <Dialog.Description className=" mt-12 mb-5 text-lg leading-normal text-center text-red-600 font-bold">
            {/* {battleResult && battleResult} */}
            placeholder
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="text-darkPurple hover:bg-brightPurple focus:shadow-brightPurple hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
              onClick={onClose}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
