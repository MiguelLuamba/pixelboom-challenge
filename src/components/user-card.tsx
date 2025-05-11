import { getInitials } from "@/utils/get-initial";
import type { User as UserType} from "@/lib/app-store"
import { Calendar, Clock, EllipsisVertical, Tag, User } from "lucide-react";

export function UserCard({
  nome,
  ativo
}: UserType) {
  return (
    <div className="grow h-20 rounded-[8px] border border-border flex items-center font-inter gap-3 p-3">

      <div className="size-14 rounded-full bg-accent uppercase grid place-items-center text-base font-medium shrink-0">
        {getInitials(nome)}
      </div>
      
      <article className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-3">
          <p className="text-foreground text-sm">{nome}</p>
          <div className="flex items-center gap-1">
            <User size={12} className="text-sidebar-ring"/>
            <span className="text-muted-foreground text-xs">51 anos, Homem</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1">
            <Calendar size={12} className="text-sidebar-ring"/>
            <span className="text-muted-foreground text-xs">22/03/2025 - 10:21am</span>
          </p>

          <p className="flex items-center gap-1">
            <Clock size={12} className="text-sidebar-ring"/>
            <span className="text-muted-foreground text-xs">38m22s</span>
          </p>

          <p className="flex items-center gap-1">
            <Tag size={12} className="text-sidebar-ring"/>
            <span className="text-muted-foreground text-xs">Usuário padrão</span>
          </p>
        </div>
      </article>


      <div className="flex items-center gap-3">
        {ativo 
          ?(<p className="px-2.5 py-0.5 rounded-full font-semibold font-inter text-xs bg-secondary text-foreground">Ativo</p>)
          :(<p className="px-2.5 py-0.5 border rounded-full border-border text-muted-foreground font-semibold font-inter text-xs">Inativo</p>)
        }
        

        <EllipsisVertical size={16} className="text-foreground"/>
      </div>


    </div>
  )
}