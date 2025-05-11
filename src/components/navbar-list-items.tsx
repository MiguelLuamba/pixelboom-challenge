import React, { ReactNode } from "react";


type NavbarItem = {
  title: string
  icon: ReactNode
  isFocus: boolean
}

type Item = {
  title: string
  items: NavbarItem[]
}

interface NavbarListItemsProps {
  childeans: Item[]
}

export function NavbarListItems({
  childeans
}:NavbarListItemsProps) {
  return (
    <div className="font-inter gap-y-1.5">
      {childeans.map((item, _index)=> (
        <div key={_index}>
          <Title title={item.title}/>
          {item.items.map((e, _index)=> (
            <ul key={_index} className="flex flex-col gap-1.5">
              <li className={`flex items-center cursor-pointer py-2 px-3 gap-3 text-muted-foreground font-medium text-sm ${e.isFocus && "bg-primary text-white"} rounded-full`}>
                {e.icon}
                {e.title}
              </li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  )
}



const Title = ({title}: {title: string}) => {
  return <p className="text-xs text-muted-foreground-2 p-2">{title}</p>
}