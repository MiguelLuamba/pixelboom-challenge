import { Checkbox } from "@/components/ui/checkbox"

interface InputProps {
  name: string
  labelText: string
  placeholder: string
  value?: string
  checkValue?: boolean
  onCheckChange?: (value: boolean) => void
  type: React.HTMLInputTypeAttribute;
}

export function Input({
  labelText,
  type, name,
  checkValue,
  placeholder, value,
  onCheckChange,
}: InputProps) {
  return (
    <div className="flex flex-col items-start grow gap-2">
      <label className="font-medium text-sm font-inter">{labelText}</label>
      <input 
        type={type} name={name}
        placeholder={placeholder}
        defaultValue={value ?? ""}
        className="w-full h-10 bg-background border border-input rounded-[6px] px-3 py-2.5 text-sm placeholder:text-muted-foreground outline-none"
      />

      {type === "tel" && (
        <div className="flex items-center gap-2">
          <Checkbox
            name="isWhatsapp"
            id="whatsapp"
            checked={checkValue}
            onCheckedChange={onCheckChange}
            className="size-4 cursor-pointer"
          />
          <label htmlFor="whatsapp" className="text-sm font-medium font-inter cursor-pointer">Whatsapp</label>
        </div>
      )}
    </div>
  );
}
