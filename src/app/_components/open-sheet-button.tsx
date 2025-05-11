"use client"

import { useUserStore } from "@/lib/app-store"
import { Plus } from "lucide-react"

export function OpenSheetButton() {
  const { openForm } = useUserStore()
  return (
    <button
      onClick={()=>openForm()}
      className="flex cursor-pointer items-center gap-2 bg-primary border-none outline-none px-4 py-3 rounded-full text-white"
    >
      <Plus size={16} color="#FFF" className="shrink-0"/>
      <span className="text-sm">Adicionar</span>
    </button>
  )
}