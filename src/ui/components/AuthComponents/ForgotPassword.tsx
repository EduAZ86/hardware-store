"use client"
import { FC } from "react";
import { IForgotPasswordProps } from "./types";
import { AuthContainer } from "./AuthContainer";
import { InputAuth } from "./InputAuth/InputAuth";
import { useForm } from "react-hook-form";

export const ForgotPassword: FC<IForgotPasswordProps> = ({ }) => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const onSubmit = handleSubmit(async (data) => {

        reset();
    })

    return (
        <AuthContainer
            title="Forgot password"
            name="forgot"
            textButton="Send"
            linkButton={{
                href: "/auth/login",
                linkText: "Login",
                text: "Already have an account?",
            }}
            onSubmit={onSubmit}
            disableSocialSignIn = {true}
        >
            <InputAuth
                key={"email"}
                disabled={false}
                id="email"
                name="email"
                placeholder="user@example.com"
                type="email"
                register={register}
                errors={errors}
                requiredMessage="Email is required"
            />

        </AuthContainer>
    )
}