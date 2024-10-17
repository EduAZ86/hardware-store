import { FC } from "react"
import { IFooterProps } from "./types"
import Link from "next/link"
import { IconSocial } from "./IconSocial"
import { faChrome, faGoogle, faLinkedin, faXTwitter, faGithub, } from '@fortawesome/free-brands-svg-icons'
import { BackgroundColor } from "../common"

export const Footer: FC<IFooterProps> = () => {
    return (
        <footer className={`
        w-full
        flex flex-col justify-center items-center
        gap-4 
        relative 
  
        py-6
        `}>
            <BackgroundColor 
            backgroundColor="background" 
            customClassName="brightness-75 opacity-25 dark:brightness-100 dark:opacity-25" 
            />
            <div className={`
            container 
            mx-auto 
            grid
            grid-cols-1 md:grid-cols-2
            gap-8
             relative
            `}>
                <div className={`
                    col-span-1
                    h-full                   
                    flex flex-col
                    items-center
                    justify-between
                    `}>
                    <h3 className=" text-lg font-semibold  text-light-text dark:text-dark-text ">Hardware Store</h3>
                    <Link className={`
                        text-sm font-semibold  
                        text-light-text dark:text-dark-text 
                        hover:text-light-primary hover:dark:text-dark-primary`
                    }
                        href="/privacy"
                    >Privacy Policy</Link>

                </div>
                <div className="col-span-1 w-full flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold">Developed by Eduardo Ayaviri</h3>
                    <div className="flex space-x-4 mt-2">
                        <IconSocial
                            key={"Twitter"}
                            url="https://x.com/EduAZ_dev"
                            icon={faXTwitter}
                        />
                        <IconSocial
                            key={"email"}
                            url="https://mail.google.com/mail/?view=cm&fs=1&to=eduardoayaviri@gmail.com"
                            icon={faGoogle}
                        />
                        <IconSocial
                            key={"linkedin"}
                            url="https://www.linkedin.com/in/eduardo-fabio-ayaviri-zuna"
                            icon={faLinkedin}
                        />
                        <IconSocial
                            key={"github"}
                            url="https://github.com/EduAZ86"
                            icon={faGithub}
                        />
                        <IconSocial
                            key={"portfolio"}
                            url="https://portfolio-eduardo-ayaviri.vercel.app/"
                            icon={faChrome}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center">
                <p className="text-sm text-light-text dark:text-dark-text">© 2024 Hardware Store. All Rights Reserved</p>
            </div>
        </footer>
    )
}