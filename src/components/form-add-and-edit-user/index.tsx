import { Form } from "./form";
import {
  Sheet,
  SheetClose,
  SheetContent, SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { CircleButton } from "@/components/circle-button";

export function FormAddAndEditUser() {
  return (
    <Sheet>
      <SheetTrigger id="open-form" className="hidden">Open</SheetTrigger>
      <SheetContent className="w-[560px] max-w-full sm:max-w-[560px] md:max-w-[560px] [&>button.absolute.top-4.right-4]:hidden overflow-y-auto flex flex-col justify-between p-10">
        <div>
          <SheetHeader className="flex p-0 flex-row items-center justify-between">
            <SheetTitle className="font-noto-serif text-foreground text-2xl font-normal">
              Adicionar usuário
            </SheetTitle>

            <SheetClose asChild id="close-sheet-form">
              <CircleButton>
                <X size={16} className="text-foreground"/>
              </CircleButton>
            </SheetClose>
            
          </SheetHeader>
          
          <Form />
        </div>



      </SheetContent>
    </Sheet>
  )
}