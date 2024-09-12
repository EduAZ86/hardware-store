"use client"
import { FC, useState } from "react"
import { IPagesTabsProps } from "./types"
import { twJoin } from "tailwind-merge"

export const PagesTabs: FC<IPagesTabsProps> = ({
    tabs,
}) => {
    const [currentTab, setCurrentTab] = useState(0)
    return (
        <div
            className={`
              w-full h-full flex flex-col 
            `}
        >
            <div
                className={`
                  w-full h-fit flex flex-row justify-start 
                
                `}
            >
                {tabs.map((tab, index) => {
                    return (
                        <button
                            key={`tab-${tab.title}-${index}`}
                            onClick={() => setCurrentTab(index)}
                            className={
                                twJoin(
                                    "border-solid p-2 font-semibold"
                                    , index === currentTab && "border-b-4 border-b-light-primary dark:border-b-dark-primary text-light-primary dark:text-dark-primary"
                                )}
                        >
                            {tab.title}
                        </button>
                    )
                })}
            </div>
            <div>
                {tabs[currentTab].tab}
            </div>
        </div>
    )
}