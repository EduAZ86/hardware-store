"use client"
import { FC } from "react";
import { ISingInProps } from "./types";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { BackgroundColor, ButtonWithText, Title } from "../common";
import { AuthForm } from "./AuthForm";
import { InputAuth } from "./InputAuth/InputAuth";
import { SingLink } from "./SingLink";

export const SingIn: FC<ISingInProps> = ({

}) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {

        await signIn("credentials", {
            username: data.user,
            password: data.password,
            callbackUrl: "/",
        });
        reset()
    })

    return (
        <div
            className={`
            w-full h-full
            flex flex-col
            items-center justify-center gap-2                
        `}
        >
            <Title text="Login" />
            <AuthForm
                title="login"
                name="login"
                onSubmit={onSubmit}
            >
                <BackgroundColor backgroundColor="acent" />
                <InputAuth
                    key={"username"}
                    disabled={false}
                    label="User name"
                    id="user"
                    name="user"
                    placeholder="user"
                    type="text"
                    register={register}
                    errors={errors}
                    requiredMessage="User name is required"
                />
                <InputAuth
                    key={"password"}
                    disabled={false}
                    label="Password"
                    id="password"
                    name="password"
                    placeholder="********"
                    type="password"
                    register={register}

                    errors={errors}
                    requiredMessage="Password is required"
                />
                <ButtonWithText
                    buttonSize="full"
                    textButton="Login"
                    buttonVariant="backgroundColor"
                    type="submit"
                />
                <SingLink
                    href="/auth/register"
                    linkText="Register"
                    text="Don't have an account?"
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
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                />
            </AuthForm>
        </div>
    )
}