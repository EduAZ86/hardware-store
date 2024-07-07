'use client'
import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher: React.FC = () => {
    const [mounted, setMounted] = useState(false)
    const [emogi, setEmogi] = useState<IconDefinition | null>(null)
    const { theme, setTheme } = useTheme();
    const sun = faSun
    const moon = faMoon

    useEffect(() => {
        setMounted(true)
    }, [])
    useEffect(() => {
        setEmogi(theme === 'light' ? moon : sun)

    }, [theme])

    if (!mounted) {
        return null
    }
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <button
            onClick={() => handleTheme()}
            className={`
            flex flex-row 
            md:w-8 w-4
            justify-center items-center
            duration-500
            text-xl        
        `}>
            {emogi && <FontAwesomeIcon icon={emogi} />}
        </button>
    )
}

export default ThemeSwitcher