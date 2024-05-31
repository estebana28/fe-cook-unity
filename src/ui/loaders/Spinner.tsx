import { Spinner } from '@radix-ui/themes'

export const SpinnerCUI = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Spinner size="3" className="text-peach" />
    </div>
  )
}
