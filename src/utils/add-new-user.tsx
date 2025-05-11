import { FormEvent } from "react";
import { useUserStore } from "@/lib/app-store";
import { customToast } from "@/components/custom-toast";

export function handleAddUser(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const nome = formData.get("nome")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const isWhatsapp = document.querySelector<HTMLInputElement>("#whatsapp")?.dataset.state === "checked";

  const telefone = formData.get("telefone")?.toString().trim() || "";
  const cpf = formData.get("cpf")?.toString().trim() || "";
  const rg = formData.get("rg")?.toString().trim() || "";


  // Pega o estado do switch via DOM
  const ativo = document.querySelector<HTMLInputElement>("#user-state")?.dataset.state === "checked";

  if (!email || !nome || !telefone || !cpf || !rg) {
    customToast("Preencha todos os campos obrigatórios.");
    return;
  }

  useUserStore.getState().addUser({
    rg, ativo,
    isWhatsapp,
    nome, email,
    telefone, cpf,
  });

  e.currentTarget.reset();

  customToast()
}