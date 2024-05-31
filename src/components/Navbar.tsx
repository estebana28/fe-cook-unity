'use client'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="m-1 top-0 left-0 fixed">
      <IoMdArrowRoundBack
        onClick={handleGoBack}
        className="text-4xl text-darkPurple hover:text-brightPurple"
      />
    </div>
  )
}
