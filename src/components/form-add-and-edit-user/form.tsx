"use client"
import { cn } from "@/lib/utils";
import { Input } from "../input";
import { Button } from "../button";
import { Switch } from "@/components/ui/switch";
import { handleAddUser } from "@/utils/add-new-user";

export function Form() {

  return (
    <form onSubmit={handleAddUser} action="" method="post" className="space-y-5">
      <Input type="text" labelText="Nome Completo" name="nome" placeholder="Digite o nome"/>
      <Input type="email" labelText="E-mail" name="email" placeholder="Digite o e-mail"/>
      <Input type="tel" labelText="Telefone" name="telefone" placeholder="Digite o telefone"/>
      
      <div className="flex items-start gap-4">
        <Input type="text" labelText="CPF" name="cpf" placeholder="Informe o CPF"/>
        <Input type="text" labelText="RG" name="rg" placeholder="Informe o RG"/>
      </div>

      <div className="border border-border bg-primary-foreground h-[66px] p-4 flex items-center gap-4 rounded-[6px]">

        <article className="flex-1 flex flex-col items-start gap-2">
          <h2 className="text-foreground text-sm font-medium">Status</h2>
          <p className="text-muted-foreground text-xs font-inter">Definia se o usuário estará ativo ao ser adicionado.</p>
        </article>

        <div className="flex items-center gap-2">
          {/* <Switch id="user-state" className="w-11 h-6"/> */}
          <Switch
            id="user-state"
            className={cn(
              "w-12 h-6",
              "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
              "[&_[data-slot=switch-thumb]]:size-5",
              "[&_[data-slot=switch-thumb]]:transition-transform",
              "[&_[data-slot=switch-thumb]]:translate-x-0",
              "data-[state=checked]:[&_[data-slot=switch-thumb]]:translate-x-[26px]"
            )}
          />
          <label htmlFor="user-state" className="text-foreground font-medium text-sm font-inter">Ativo</label>
        </div>


      </div>

      <div className="flex items-center justify-end gap-2 mt-10">
        <label htmlFor="close-sheet-form">
          <Button type="button" variant="SECUNDARY" text="cancelar"/>
        </label>
        <Button type="submit" variant="PRIMARY" text="adicionar"/>
      </div>
    </form>
  )
}