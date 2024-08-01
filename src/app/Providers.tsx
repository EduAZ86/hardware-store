"use client"
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import DarkModeProvider from "@/ui/theme/themeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient} >
            <DarkModeProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </DarkModeProvider>
        </QueryClientProvider>
    )
}
