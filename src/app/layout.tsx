import "./globals.css";
import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";


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
        className={`${inter.variable} ${notoSerif.variable} font-inter text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
