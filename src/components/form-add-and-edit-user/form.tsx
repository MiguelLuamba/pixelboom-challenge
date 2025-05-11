import { cn } from "@/lib/utils";
import { Input } from "../input";
import { Button } from "../button";
import { FormEvent, useState } from "react";
import { customToast } from "../custom-toast";
import { useUserStore } from "@/lib/app-store";
import { Switch } from "@/components/ui/switch";

export function Form() {
  const { closeForm } = useUserStore();
  const {addUser, updateUser, userToEdit} = useUserStore()
  const [ativo, setAtivo] = useState(userToEdit?.ativo ?? false);
  
  function handleAddAndEditUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();


    const formData = new FormData(e.currentTarget);

    const nome = formData.get("nome")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const isWhatsapp = document.querySelector<HTMLInputElement>("#whatsapp")?.dataset.state === "checked";

    const telefone = formData.get("telefone")?.toString().trim() || "";
    const cpf = formData.get("cpf")?.toString().trim() || "";
    const rg = formData.get("rg")?.toString().trim() || "";


    // PEGAR O ESTADO DO SWITH VIA DOM
    const ativo = document.querySelector<HTMLInputElement>("#user-state")?.dataset.state === "checked";

    if (!email || !nome || !telefone || !cpf || !rg) {
      customToast("Preencha todos os campos obrigatórios.");
      return;
    }

    if (userToEdit) {
      updateUser({
        ...userToEdit,
        nome, email,
        telefone, cpf,
        rg, ativo,
        isWhatsapp,
      });
      customToast("Dados do usuário atualizado com sucesso!")

    } else {
      addUser({
        nome, email,
        telefone, cpf,
        rg, ativo,
        isWhatsapp,
      });
      customToast("Usuário adicionado com sucesso!")
    }

    e.currentTarget.reset();

  }
  return (
    <form onSubmit={handleAddAndEditUser} action="" method="post" className="space-y-5">
      <Input type="text" labelText="Nome Completo" name="nome" placeholder="Digite o nome" value={userToEdit?.nome ?? ""} />
      <Input type="email" labelText="E-mail" name="email" placeholder="Digite o e-mail" value={userToEdit?.email ?? ""}/>
      <Input type="tel" labelText="Telefone" name="telefone" placeholder="Digite o telefone" value={userToEdit?.telefone ?? ""} checkValue={userToEdit?.isWhatsapp ?? false}/>
      
      <div className="flex items-start gap-4">
        <Input type="text" labelText="CPF" name="cpf" placeholder="Informe o CPF" value={userToEdit?.cpf ?? ""}/>
        <Input type="text" labelText="RG" name="rg" placeholder="Informe o RG" value={userToEdit?.rg ?? ""}/>
      </div>

      <div className="border border-border bg-primary-foreground h-[66px] p-4 flex items-center gap-4 rounded-[6px]">
        <article className="flex-1 flex flex-col items-start gap-2">
          <h2 className="text-foreground text-sm font-medium">Status</h2>
          <p className="text-muted-foreground text-xs font-inter">Defina se o usuário estará ativo ao ser adicionado.</p>
        </article>

        <div className="flex items-center gap-2">
          <Switch
            id="user-state"
            checked={ativo}
            onCheckedChange={setAtivo}
            className={cn(
              "w-12 h-6 cursor-pointer",
              "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
              "[&_[data-slot=switch-thumb]]:size-5",
              "[&_[data-slot=switch-thumb]]:transition-transform",
              "[&_[data-slot=switch-thumb]]:translate-x-0",
              "data-[state=checked]:[&_[data-slot=switch-thumb]]:translate-x-[26px]"
            )}
          />
          <label htmlFor="user-state" className="text-foreground cursor-pointer font-medium text-sm font-inter">Ativo</label>
        </div>
      </div>

      {/* INPUT PARA ENVIAR O VALOR NO SHWITH DO FORM */}
      <input type="hidden" name="ativo" value={ativo ? "true" : "false"} />

      <div className="flex items-center justify-end gap-2 mt-10">
        <label htmlFor="close-sheet-form">
          <Button type="button" variant="SECUNDARY" text="cancelar" onPress={closeForm}/>
        </label>
        <Button type="submit" variant="PRIMARY" text={userToEdit?.id?"Editar":"Adicionar"}/>
      </div>
    </form>
  )
}
