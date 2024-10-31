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
                w-fit h-fit group
                flex flex-row justify-center items-center gap-4 opacity-90
            `}
        >
            <span
                className={`
                w-10 h-10 flex items-center justify-center
                rounded-full
                text-light-background dark:text-dark-background
                hover:text-light-primary dark:hover:text-dark-primary
                bg-light-primary dark:bg-dark-primary
                hover:bg-light-background dark:hover:bg-dark-background
                shadow-lg
                hover:duration-300                
        `}
            >
                {emogi && <FontAwesomeIcon
                    icon={emogi}
                    className={`
                        text-md text-center                    
                        `}
                />}
            </span>
        </button>

    )
}

export default ThemeSwitcher
