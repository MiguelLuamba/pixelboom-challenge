import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Noto_Serif, Inter } from "next/font/google";
import { NavbarListItems } from "@/components/navbar-list-items";
import { Activity, Bell, ChevronsUpDown, CircleHelp, FileCheck, Headset, PanelLeft, Settings, User } from "lucide-react";
import { CircleButton } from "@/components/circle-button";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Pixelboom Challenge",
  description: "Gerencie seus usuários ativos e inativos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${notoSerif.variable} font-inter text-foreground antialiased flex items-start h-full overflow-hidden`}
      >
        {/* LEFT MENU */}
        <section className="w-60 shrink-0 h-screen relative bg-navbar border-r border-border">
          <div className="flex px-4 items-center w-full h-[72px] border-b border-border">
            <button className="border-none outline-none bg-dark w-24 h-8 rounded-[8px]">
              <p className="text-white text-xs uppercase">LOGO</p>
            </button>
          </div>

          <aside className="w-full h-full items-center">
            <nav className="flex flex-col gap-2 p-4 text-foreground border-border h-full">
              <button className="flex w-full items-center justify-between p-2 ">
                <div className="space-x-3">
                  <span className="p-2.5 bg-secondary rounded-[8px]">FA</span>
                  <span>Filial A</span>
                </div>

                <ChevronsUpDown size={16}/>

              </button>

              <NavbarListItems
                childeans={[
                  {
                    title:"Menu",
                    items:[
                      {
                        title:"Dashboard",
                        isFocus:false,
                        icon:<Activity size={16}/>
                      },
                      {
                        title:"Usuários",
                        isFocus:true,
                        icon:<User size={16}/>
                      },
                      {
                        title:"Documentos",
                        isFocus:false,
                        icon:<FileCheck size={16}/>
                      },
                    ]
                  },
                  {
                    title:"Configurações",
                    items:[{
                      title:"Geral",
                      isFocus:false,
                      icon:<Settings size={16}/>
                    }]
                  },
                ]}
              />



            </nav>

            <div className="p-4 flex w-full items-center justify-between -translate-y-32">
              <p className="text-sm font-inter">Precisa de ajuda?</p>
              <Headset size={16}/>
            </div>

          </aside>


        </section>

        {/* HEADER AND OTHER APP ROUTES */}
        <aside className="w-full">
          {/* HEADER */}
          <header className="flex-1 border-border border-b h-[72px] flex items-center justify-between px-4">

            <PanelLeft size={16}/>

            <div className="flex items-center gap-3">
              <CircleButton>
                <CircleHelp size={16} className="shrink-0"/>
              </CircleButton>
              <CircleButton >
                <Bell size={16}/>
              </CircleButton>

              <CircleButton>
                <Image src={"/images/admin-photo.png"} fill alt="photo" priority/>
              </CircleButton>


            </div>
              
          </header>

          {/* OTHER ROUTES */}
          <main className="size-full h-[calc(100vh-72px)] overflow-y-auto">
            {children}

            <div className="bg-white">
              <Toaster />
            </div>
          </main>
        </aside>


      </body>
    </html>
  );
}
