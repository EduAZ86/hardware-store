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
                w-fit h-20 group
                flex flex-row justify-center items-center gap-4 opacity-90
            `}
        >
            <span
                className={`
            w-8 h-8 rounded-full                   
            border-2 border-light-acent dark:border-dark-acent
            cursor-pointer
            flex flex-row justify-center items-center 
            hover: duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary               
        `}
            >
                {emogi && <FontAwesomeIcon
                    icon={emogi}
                    className="text-md text-center text-light-text dark:text-dark-text"
                />}
            </span>
        </button>

    )
}

export default ThemeSwitcher
