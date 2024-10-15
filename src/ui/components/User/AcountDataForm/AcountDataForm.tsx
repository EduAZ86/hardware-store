"use client";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IAcountDataFormProps } from "./types";
import { BasicForm, ButtonWithText, InputField } from "../../common";
import { useDataUser } from "@/hooks/user/useDataUser";
import { IUser } from "@/types/user.types";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./validationSchema";
import toast, { Toaster } from "react-hot-toast";

export const AcountDataForm: FC<IAcountDataFormProps> = ({
    currentUserData,
}) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm(
        {
            resolver: zodResolver(userSchema)
        }
    );
    const { mutate: updateUser } = useDataUser().useUpdateUser(currentUserData?._id as string);
    useEffect(() => {
        reset({
            username: currentUserData?.username,
            email: currentUserData?.email,
            picture: currentUserData?.picture

        });        
    }, [])

    const onSubmit = handleSubmit(async (data) => {
        const updateData: Partial<IUser> = {
            username: data.username,
            email: data.email,
            picture: data.picture,
            password: data?.password
        }
        updateUser(updateData, {
            onSuccess: (data) => {
                toast.success("User updated successfully")
                reset()
            },
            onError: (error) => {
                toast.error(error.message)
            }
        });
    });
    const handleCancel = () => {
        reset()
        router.back()
    }

    return (
        <div className="w-full h-full">
            <BasicForm
                onSubmit={onSubmit}
                name="accountDataForm"
            >
                <div className="grid grid-cols-3 grid-rows-2 gap-4 ">
                    <div className=" flex flex-col row-span-2 justify-center items-center gap">
                        <img
                            src={watch("picture")}
                            className="
                           
                            h-full w-20
                            object-cover                           
                            rounded-full
                            border-2
                            border-light-primary
                            dark:border-dark-primary
                            "
                        />
                        <InputField
                            name="picture"
                            label="Picture"
                            type="url"
                            register={register}
                            requiredMessage={undefined}
                            errors={errors}
                            disabled={false}
                        />
                    </div>
                    <div className="flex flex-col row-span-2 gap-2">

                        <InputField
                            name="username"
                            label="User Name"
                            type="text"
                            register={register}
                            requiredMessage={undefined}
                            errors={errors}
                            disabled={false}
                        />
                        <InputField
                            name="email"
                            label="Email"
                            type="email"
                            register={register}
                            requiredMessage={undefined}
                            errors={errors}
                            disabled={false}
                        />
                    </div>

                    <div className="flex flex-col row-span-2 gap-2">
                        <InputField
                            name="password"
                            label="Password"
                            type="password"
                            register={register}
                            requiredMessage={undefined}
                            errors={errors}
                            disabled={false}
                        />
                        <InputField
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            register={register}
                            requiredMessage={undefined}
                            errors={errors}
                            disabled={false}
                        />
                    </div>
                </div>
                <div
                    className="flex flex-row gap-4 p-2">
                    <ButtonWithText
                        buttonSize="middle"
                        buttonVariant="backgroundColor"
                        textButton="Save"
                        type="submit"
                    />
                    <ButtonWithText
                        onClick={handleCancel}
                        buttonSize="middle"
                        buttonVariant="transparent"
                        textButton="Cancel"
                        type="button"
                    />
                </div>
            </BasicForm>
            <Toaster/>
        </div>
    )
}