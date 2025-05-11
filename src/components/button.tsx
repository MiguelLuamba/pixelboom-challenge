import { ButtonHTMLAttributes } from "react"

interface ButtonProps {
  variant: "PRIMARY" | "SECUNDARY"
  type: "submit" | "button"
  text: string
}
export function Button({
  type,
  text,
  variant
}: ButtonProps) {
  return (
    <button type={type} 
    className={`w-[89px] h-10 cursor-pointer rounded-full grid place-items-center text-sm font-medium capitalize
      ${variant==="SECUNDARY"?"border border-border text-foreground":"bg-primary text-primary-foreground"}`}
    >
      {text}
    </button>
  )
}