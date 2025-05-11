import { Checkbox } from "@/components/ui/checkbox"

interface InputProps {
  name: string
  labelText: string
  placeholder: string
  type: React.HTMLInputTypeAttribute;
}

export function Input({
  labelText,
  type, name,
  placeholder,
}:InputProps) {
  return (
    <div className="flex flex-col items-start grow gap-2">
      <label className="font-medium text-sm font-inter">{labelText}</label>
      <input 
        type={type} name={name} id="" 
        placeholder={placeholder}
        className="w-full h-10 bg-background border border-input rounded-[6px] px-3 py-2.5 text-sm placeholder:text-muted-foreground outline-none"
      />

      {type === "tel" && (
        <div className="flex items-center gap-2">
          <Checkbox id="whatsapp" name="whatsapp" className="size-4"/>
          <label htmlFor="whatsapp" className="text-sm font-medium font-inter">Whatsapp</label>
        </div>
      )}

    </div>
  )
}