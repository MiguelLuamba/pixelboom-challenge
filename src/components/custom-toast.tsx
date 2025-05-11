import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function customToast(message: string = "Usuário adicionado com sucesso!") {
  toast.custom((t) => (
    <div className="bg-white border border-border rounded-xl shadow-md p-4 flex items-center justify-between gap-4 w-full max-w-[360px]">
      <span className="text-sm text-black">{message}</span>
      <Button
        variant="ghost"
        className="text-sm text-black border border-gray-300 rounded-full px-4 py-1 h-auto"
        onClick={() => toast.dismiss(t)}
      >
        Fechar
      </Button>
    </div>
  ), {duration:5000})
}
