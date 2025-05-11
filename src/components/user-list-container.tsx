"use client"
import { useState, useMemo } from "react"
import { UserCard } from "./user-card"
import { useUserStore } from "@/lib/app-store"
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
import { LoadingComponent } from "./loading-components"

export function UserListContainer() {
  const { isHydrated, users } = useUserStore()
  
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  const totalItems = users.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    return users.slice(start, end)
  }, [users, currentPage, itemsPerPage])

  function handlePageChange(page: number) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <aside className="w-full space-y-5">
      <section className="flex flex-col gap-2">
        {isHydrated 
          ? totalItems > 0 ? (
              paginatedUsers.map(user => (
                <UserCard key={user.id} {...user} />
              ))
            ) : (
              <p className="text-center text-muted-foreground-2 text-sm my-10">Adicione um usuário</p>
            )
          : <LoadingComponent />
        }
      </section>

      <div className="flex items-center justify-between gap-3 ">
        <p className="text-muted-foreground text-sm font-inter text-nowrap">
          {paginatedUsers.length} de {totalItems} itens
        </p>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} href="#" />
            </PaginationItem>

            {[...Array(totalPages).keys()].slice(0, 5).map(i => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 5 && <PaginationEllipsis />}

            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="flex flex-row gap-2 items-center">
          <p className="text-muted-foreground text-sm font-inter text-nowrap">Itens por página</p>

          <div className="border border-input w-[70px] h-10 rounded-[6px]">
            <Select
              defaultValue={itemsPerPage.toString()}
              onValueChange={(value) => {
                setItemsPerPage(Number(value))
                setCurrentPage(1) // Resetar para a página 1 ao mudar o número
              }}
            >
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
    </aside>
  )
}
