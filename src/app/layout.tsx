import "./globals.css";
import { Footer, NavBar } from "@/ui";
import type { Metadata } from "next";
import { Providers } from "./Providers";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hardware Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />          
        </Providers>
      </body>
    </html>
  );
}
