import { ListFilter, Search } from "lucide-react";
import { CircleButton } from "@/components/circle-button";
import { StatsContainer } from "@/components/stats-container";
import { OpenSheetButton } from "./_components/open-sheet-button";
import { UserListContainer } from "@/components/user-list-container";
import { FormAddAndEditUser } from "@/components/form-add-and-edit-user";

export default function Home() {

  return (
    <main className="w-full h-max p-10 flex flex-col gap-5 overflow-y-auto">
      <article className="flex items-center justify-between pb-6">
        <h1 className="font-noto-serif text-3xl">Usuários</h1>
        <OpenSheetButton/>
      </article>

      {/* STATISTICS CARD CONTAINER */}
      <StatsContainer/>

      {/* FORM TO FILTER USERS */}
      <form action="" method="post" className="flex w-full gap-3">
        <div className="flex flex-1 h-10 border border-input rounded-[6px] items-center p-3 gap-1">
          <Search size={16} className="text-muted-foreground "/>
          <input type="search" name="" id="" placeholder="Buscar..." className="w-full placeholder:text-muted-foreground h-full border-none outline-none text-sm" />
        </div>

        <CircleButton>
          <ListFilter size={16}/>
        </CircleButton>
      </form>

      {/* LIST OF USERS */}
      <UserListContainer />

      {/* MODAL TO ADD AND EDIT USER */}
      <FormAddAndEditUser />
    </main>
  )
}
