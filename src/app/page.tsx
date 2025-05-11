import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { UserCard } from "@/components/user-card";
import { StatsCard } from "@/components/stats-card";
import { CircleButton } from "@/components/circle-button";
import { ListFilter, Plus, Search, X } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormAddAndEditUser } from "@/components/form-add-and-edit-user";
import { UserListContainer } from "@/components/user-list-container";
import { StatsContainer } from "./_components/stats-container.tsx";

export default function Home() {

 
  
  return (
    <main className="w-full h-max p-10 flex flex-col gap-5 overflow-y-auto">

      <article className="flex items-center justify-between pb-6">
        <h1 className="font-noto-serif text-3xl">Usuários</h1>
        <label htmlFor="open-form" className="flex cursor-pointer items-center gap-2 bg-primary border-none outline-none px-4 py-3 rounded-full text-white">
          <Plus size={16} color="#FFF" className="shrink-0"/>
          <span className="text-sm">Adicionar</span>
        </label>
      </article>



      <StatsContainer/>


      <form action="" method="post" className="flex w-full gap-3">
        <div className="flex flex-1 h-10 border border-input rounded-[6px] items-center p-3 gap-1">
          <Search size={16} className="text-muted-foreground "/>
          <input type="search" name="" id="" placeholder="Buscar..." className="w-full placeholder:text-muted-foreground h-full border-none outline-none text-sm" />
        </div>

        <CircleButton>
          <ListFilter size={16}/>
        </CircleButton>
      </form>



      {/* <aside className="w-full space-y-5"> */}
        <UserListContainer />

        {/* <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm font-inter text-nowrap">2 de 296 itens</p>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className="flex flex-row gap-2 items-center">
            <p className="text-muted-foreground text-sm font-inter text-nowrap">Itens por página</p>

            <div className="border border-input w-[70px] h-10 rounded-[6px]">
              <Select defaultValue="10">
                <SelectTrigger className="border-none outline-none">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent className="bg-white border-none outline-none">
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                </SelectContent>
              </Select>

            </div>

          </div>
        </div>
      </aside> */}


      <FormAddAndEditUser />

    
    </main>
  )
}
