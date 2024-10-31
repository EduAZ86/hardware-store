"use client"
import { FC } from "react";
import { ISingUpProps } from "./types";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { INewUser } from "@/types/user.types";
import { AuthContainer } from "./AuthContainer";
import { InputAuth } from "./InputAuth/InputAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "@/lib/fetching/fechUsers";
import { validationUserSchema } from "./validationUserSchema";

export const SingUp: FC<ISingUpProps> = () => {

    const { handleSubmit, register, reset, formState: { errors } } = useForm(
        {
            resolver: zodResolver(validationUserSchema)
        }
    )
    const onSubmit = handleSubmit(async (data) => {
        const newUser: INewUser = {
            email: data.email,
            password: data.password,
            username: data.user,
            role: "user"
        };
        await userRegister(newUser);

        signIn("credentials", {
            email: data.email,
            password: data.password,
            user: data.user,
            callbackUrl: "/",
        });
        reset();
    })
    return (
        <AuthContainer
            title="Register"
            name="register"
            textButton="Sing up"
            linkButton={{
                href: "/auth/login",
                linkText: "Sing in",
                text: "Already have an account?",
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
            <InputAuth
                key={"confirm"}
                disabled={false}
                id="confirm"
                name="confirm"
                placeholder="confirm password"
                type="password"
                register={register}
                errors={errors}
                requiredMessage="Password is required"
            />

        </AuthContainer>
    )
}