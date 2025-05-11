import { ReactNode } from "react"
export function CircleButton({children}:{children: ReactNode}) {
  return (
    <button className="size-10 cursor-pointer overflow-hidden rounded-full border border-border grid place-items-center text-foreground relative">
      {children}
    </button>
  )
}