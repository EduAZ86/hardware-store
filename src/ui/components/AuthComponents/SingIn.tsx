"use client"
import { FC } from "react";
import { ISingInProps } from "./types";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { AuthContainer } from "./AuthContainer";
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
        <AuthContainer
            title="Login"
            name="login"
            textButton="Sing in"
            linkButton={{
                href: "/auth/register",
                linkText: "Sing up",
                text: "Don't have an account?",
            }}
            onSubmit={onSubmit}
        >
            <InputAuth
                key={"username"}
                disabled={false}
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
                id="password"
                name="password"
                placeholder="password"
                type="password"
                register={register}
                errors={errors}
                requiredMessage="Password is required"
            />
                   <SingLink
                        href={"/auth/recovery"}
                        linkText={"Recover password"}
                        text={"Forgot your password?"}
                    />
        </AuthContainer>
    )
}