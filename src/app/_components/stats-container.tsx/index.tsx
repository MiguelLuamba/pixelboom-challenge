"use client";
import { useUserStore } from "@/lib/app-store";
import { StatsCard } from "@/components/stats-card";


export function StatsContainer() {
  const { isHydrated, users } = useUserStore()
  const usuariosAtivos = users.filter(user => user.ativo).length;
  const usuariosInativos = users.filter(user => !user.ativo).length;


  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatsCard title="Usuários" value={users.length || 0}/>
      <StatsCard title="Tempo de Sessão" value="33m 20s"/>
      <StatsCard title="Ativos" value={usuariosAtivos}/>
      <StatsCard title="Inativos" value={usuariosInativos}/>
    </div>
  )
}