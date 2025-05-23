interface ButtonProps {
  text: string
  onPress?: ()=> void
  type: "submit" | "button"
  variant: "PRIMARY" | "SECUNDARY"
}
export function Button({
  variant,
  type, text,
  onPress
}: ButtonProps) {
  return (
    <button type={type} 
    onClick={onPress}
    className={`w-[89px] h-10 cursor-pointer rounded-full grid place-items-center text-sm font-medium capitalize
      ${variant==="SECUNDARY"?"border border-border text-foreground":"bg-primary text-primary-foreground"}`}
    >
      {text}
    </button>
  )
}