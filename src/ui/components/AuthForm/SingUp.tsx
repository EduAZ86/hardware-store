"use client"
import { FC } from "react";
import { AuthForm } from "./AuthForm";
import { SingLink } from "./SingLink";
import { ISingUpProps } from "./types";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Title } from "../common/typography";
import { INewUser } from "@/types/user.types";
import { InputAuth } from "./InputAuth/InputAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRegister } from "@/lib/fetching/fechUsers";
import { BackgroundColor, ButtonWithText } from "../common";
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
        <div
            className={`
                relative
                w-full h-full
                flex flex-col
                items-center 
                justify-center
                 gap-2                
            `}
        >
            <Title text="Register" />
            <AuthForm
                title="register"
                name="register"
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

                    errors={errors}
                    requiredMessage="Email is required"
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
                <ButtonWithText
                    buttonSize="full"
                    textButton="Register"
                    buttonVariant="backgroundColor"
                    type="submit"
                />
                <SingLink
                    href="/auth/login"
                    linkText="Sing In"
                    text="Already have an account?"
                />
            </AuthForm>
        </div>
    )
}