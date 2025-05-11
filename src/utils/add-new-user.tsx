import { FormEvent } from "react";
import { useUserStore } from "@/lib/app-store"; // ajuste o caminho conforme seu projeto
import { toast } from "sonner"

export function handleAddUser(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const nome = formData.get("nome")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const telefone = formData.get("telefone")?.toString().trim() || "";
  const cpf = formData.get("cpf")?.toString().trim() || "";
  const rg = formData.get("rg")?.toString().trim() || "";

  // Pega o estado do switch via DOM
  const ativo = document.querySelector<HTMLInputElement>("#user-state")?.dataset.state === "checked";

  if (!email || !nome || !telefone || !cpf || !rg) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  useUserStore.getState().addUser({
    nome,  email,
    telefone, cpf,
    rg, ativo,
    isWhatsapp: true
  });

  e.currentTarget.reset();
  toast("Usuário adicionado com sucesso!")



}
