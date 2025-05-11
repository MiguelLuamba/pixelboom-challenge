"use client";
import { useUserStore } from "@/lib/app-store";
import { Skeleton } from "@/components/ui/skeleton";
import { StatsCard } from "@/components/stats-card";

export function StatsContainer() {
  const { isHydrated, users } = useUserStore()
  const usuariosAtivos = users.filter(user => user.ativo).length;
  const usuariosInativos = users.filter(user => !user.ativo).length;


  if(!isHydrated) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({length:4}).map((_, index)=>(
          <Skeleton key={index} className="grow h-[100px] rounded-[8px]" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatsCard title="Usuários" value={users.length ?? 0}/>
      <StatsCard title="Tempo de Sessão" value="33m 20s"/>
      <StatsCard title="Ativos" value={usuariosAtivos ?? 0}/>
      <StatsCard title="Inativos" value={usuariosInativos ?? 0}/>
    </div>
  )
}