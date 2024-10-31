"use client";
import { FC } from "react";
import { IAuthContainerProps } from "./types";
import { ButtonWithText, IconButton, Title } from "../common";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { AuthForm } from "./AuthForm";
import { SingLink } from "./SingLink";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const AuthContainer: FC<IAuthContainerProps> = ({
    children,
    onSubmit,
    title,
    name,
    textButton,
    linkButton: { href, linkText, text },
    disableSocialSignIn
}) => {
    const route = useRouter();
    const pathname = usePathname();
    console.log("pathname", pathname);

    const handleBack = () => {   
        route.push(pathname === "/auth/recovery" ? "/auth/login" : "/");
    };
    return (
        <div
            className={`
            w-full md:w-96
            min-h-screen
            relative            
            grid grid-rows-6 grid-cols-1
            px-2               
            gap-2
            bg-light-background dark:bg-dark-background                
    `}
        >
            <div className="row-span-1 flex  items-center ">
                <IconButton
                    icon={faArrowLeft}
                    onClick={handleBack}
                />
            </div>
            <div className="row-span-1 w-full flex items-center gap-2">
                <Title text={title} />
            </div>
            <div className="row-span-4">

                <AuthForm
                    title={title.toLowerCase()}
                    name={name}
                    onSubmit={onSubmit}
                >
                    {children}
                    <ButtonWithText
                        buttonSize="full"
                        textButton={textButton}
                        buttonVariant="backgroundColor"
                        type="submit"
                    />

                    {disableSocialSignIn
                        ?
                        <></>
                        :
                        <>
                            <SingLink
                                href={href}
                                linkText={linkText}
                                text={text}
                            />
                            <span className=" text-center relative flex flex-row items-center justify-center gap-2 w-full">
                                <span className="border-solid border-b-[1px] w-full h-1/2 border-light-acent dark:border-dark-acent" />
                                or
                                <span className="border-solid border-b-[1px] w-full h-1/2 border-light-acent dark:border-dark-acent" />
                            </span>
                            <ButtonWithText
                                buttonSize="full"
                                buttonVariant="transparent"
                                textButton="Google"
                                type="button"
                                onClick={() => signIn("google", { callbackUrl: "/" })} />
                        </>
                    }
                </AuthForm>
            </div>
        </div>
    )
}