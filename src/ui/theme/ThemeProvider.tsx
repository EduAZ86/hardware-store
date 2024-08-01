import {useState, useEffect} from 'react'
import { ThemeProvider } from "next-themes";

export default function DarkModeProvider({children}:any){

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);
    
    if (!mounted) {
        return (
        <>
            {children}
        </>)
    }

    return  (
        <ThemeProvider attribute='class'>
            {children}
        </ThemeProvider>
    )
}