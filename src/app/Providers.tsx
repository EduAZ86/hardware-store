"use client"
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import DarkModeProvider from "@/ui/theme/themeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient} >
            <DarkModeProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </DarkModeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
