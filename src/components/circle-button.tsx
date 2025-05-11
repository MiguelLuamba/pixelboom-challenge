import { ReactNode } from "react"

interface CircleButtonProps {
  children: ReactNode
  onPress?: ()=> void
}
export function CircleButton({children, onPress}: CircleButtonProps) {
  return (
    <button onClick={onPress} className="size-10 cursor-pointer overflow-hidden rounded-full border border-border grid place-items-center text-foreground relative">
      {children}
    </button>
  )
}