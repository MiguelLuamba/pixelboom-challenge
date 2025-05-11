import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function customToast(message: string = "Usuário adicionado com sucesso!") {
  toast.custom((t) => (
    <div className="bg-white border border-border rounded-[8px] shadow-md py-6 px-8 flex items-center justify-between gap-4 w-full max-w-[364px]">
      <span className="text-sm text-foreground">{message}</span>
      <Button
        variant="ghost"
        className="text-sm border border-gray-300 rounded-full px-4 py-2.5 h-auto font-medium text-foreground"
        onClick={() => toast.dismiss(t)}
      >
        Fechar
      </Button>
    </div>
  ), { duration:5000, position:"bottom-right" })
}
