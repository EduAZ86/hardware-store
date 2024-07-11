"use client"
import { FC } from "react";
import { ISingUpProps } from "./types";
import { Title } from "../common/typography";
import { BackgroundColor, ButtonWithText } from "../common";
import { InputAuth } from "./InputAuth/InputAuth";
import { useForm } from "react-hook-form";
import { AuthForm } from "./AuthForm";
import { SingLink } from "./SingLink";
import { signIn, useSession } from "next-auth/react";

export const SingUp: FC<ISingUpProps> = () => {

    const { handleSubmit, register, reset, watch } = useForm()

    const { data: session } = useSession()

    const onSubmit = handleSubmit((data) => {

    })

    return (
        <div
            className={`
                w-full h-full
                flex flex-col
                items-center justify-center gap-2                
            `}
        >
            <Title text="Register" />
            <AuthForm
                onSubmit={onSubmit}
            >
                <BackgroundColor backgroundColor="acent" />
                <InputAuth
                    key={"email"}
                    disabled={false}
                    label="Email adress"
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    register={register}
                    watch={watch}
                />
                <InputAuth
                    key={"password"}
                    disabled={false}
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="password"
                    type="password"
                    register={register}
                    watch={watch}

                />
                <InputAuth
                    key={"username"}
                    disabled={false}
                    label="User name"
                    id="user"
                    name="user"
                    placeholder="user"
                    type="text"
                    register={register}
                    watch={watch}
                />
                <ButtonWithText
                    buttonSize="full"
                    textButton="Register"
                    buttonVariant="backgroundColor"
                    type="submit"
                />
                <SingLink
                    href="/singIn"
                    linkText="Sing In"
                    text="Already have an account?"
                />
                <span className=" text-center relative flex flex-row items-center justify-center gap-2 w-full">
                    <span className="border-solid border-b-[1px] w-full h-1/2 border-light-text dark:border-dark-text" />
                    or
                    <span className="border-solid border-b-[1px] w-full h-1/2 border-light-text dark:border-dark-text" />
                </span>
                <ButtonWithText
                    buttonSize="full"
                    buttonVariant="transparent"
                    textButton="Google"
                    type="button"
                    onClick={() => signIn()}
                />
            </AuthForm>
        </div>
    )
}