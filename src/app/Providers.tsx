"use client"
import ThemeColorProvider from "@/ui/theme/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const queryClient = new QueryClient()

export const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient} >
            <ThemeColorProvider>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ThemeColorProvider>
        </QueryClientProvider>
    )
}
