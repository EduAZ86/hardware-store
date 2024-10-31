"use client"
import { FC, useEffect, useState } from "react";
import { ICheckoutProps } from "./types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"
import { IOrder } from "@/types/order.types";
import toast, { Toaster } from 'react-hot-toast';
import { useDataUserCart } from "@/hooks/carts/useDataUserCart";
import { useCheckoutStore } from "@/lib/store/checkout/useCheckoutStore";
import { BasicForm, ButtonWithText, InputField, InputTextArea, Title } from "../common";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationFormOrderSchema } from "./validationOrderSchema";
import { ShowOrderData } from "./ShowOrderData/ShowOrderData";
import { useOrderData } from "@/hooks/orders/useDataOrder";
import { NewOrderClass } from "./newOrder.class";
import { OrderSumary } from "./OrderSumary/OrderSumary";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { getPreferenceID } from "./getPreferenceID";

export const CheckoutComponent: FC<ICheckoutProps> = ({
    userID
}) => {
    const { handleSubmit, register, reset, formState: { errors }, watch } = useForm(
        {
            resolver: zodResolver(validationFormOrderSchema)
        }
    )
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;
    const { cartData, totalPrice, isLoading } = useDataUserCart().useGetCartUser(userID as string)
    const { mutate: postOrder, isSuccess, data: orderResponse, } = useOrderData().usePostNewOrder()
    const { checkoutData, setCheckoutData, clearCheckoutData } = useCheckoutStore()
    const router = useRouter()
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
    const [preferenceId, setPreferenceId] = useState<string>("")

    const handleBack = () => {
        if (showConfirmation) {
            setShowConfirmation(false)
            setPreferenceId("")
        } else {
            reset()
            router.back()
        }
    }
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            toast.error("There are errors in the form")
        }
    }, [errors]);
    useEffect(() => {
        initMercadoPago(publicKey);
    }, [])

    const handleConfirmation = async () => {
        const preference = await getPreferenceID(cartData?.items, userID as string, publicKey)
        console.log("preference", preference)
        if (preference) {
            setPreferenceId(preference.id as string)
        }

    }

    const onSubmit = handleSubmit((formDataValues) => {

        const newOrder = new NewOrderClass(userID as string, cartData?.items, totalPrice, formDataValues)

        if (showConfirmation) {
            postOrder(newOrder as IOrder, {
                onSuccess: () => {
                    toast.success("Order created successfully")
                },
                onError: () => {
                    toast.error("Error creating order")
                }
            })
        } else {
            setCheckoutData(newOrder)
            setShowConfirmation(true)
        }
    })

    return (
        <div
            className={`
            w-full h-fit
            flex relative
            flex-col
            px-6                
            `}
        >
            <Title
                text={"Checkout"}
            />
            <BasicForm
                name="newOrder"
                transparent
                onSubmit={onSubmit}
            >
                <div className="w-full grid grid-cols-3 gap-2">
                    <div
                        className="col-span-2"
                    >
                        {showConfirmation
                            ?
                            <ShowOrderData
                                order={checkoutData as IOrder}
                            />
                            :
                            <div
                                className={`
                                    w-full
                                    grid
                                    grid-cols-1 sm:grid-cols-2
                                    justify-items-center
                                    gap-4
                                    bg-light-acent dark:bg-dark-acent
                                    p-2 rounded-md
                                `}
                            >
                                <InputField
                                    key={"User Name"}
                                    label={"User Name"}
                                    disabled={false}
                                    id="name"
                                    name="userName"
                                    placeholder="User Name"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="User name is required"
                                />
                                <InputField
                                    key={"Phone number"}
                                    label={"Phone number"}
                                    disabled={false}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Phone number"
                                    type="tel"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="Phone number is required"
                                />
                                <InputField
                                    key={"email"}
                                    label={"Email"}
                                    disabled={false}
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="email is required"
                                />
                                <InputField
                                    key={"address"}
                                    label={"Address"}
                                    disabled={false}
                                    id="address"
                                    name="address"
                                    placeholder="address"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="address is required"
                                />
                                <InputField
                                    key={"city"}
                                    label={"City"}
                                    disabled={false}
                                    id="city"
                                    name="city"
                                    placeholder="city"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="city is required"
                                />
                                <InputField
                                    key={"country"}
                                    label={"country"}
                                    disabled={false}
                                    id="country"
                                    name="country"
                                    placeholder="country"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="country is required"
                                />
                                <InputField
                                    key={"postal"}
                                    label={"Postal code"}
                                    disabled={false}
                                    id="postalCode"
                                    name="postalCode"
                                    placeholder="postal code"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    requiredMessage="postal is required"
                                />
                                <InputTextArea
                                    key={"Order note"}
                                    label={"Order note"}
                                    cols={50}
                                    rows={5}
                                    disabled={false}
                                    id="orderNotes"
                                    name="orderNotes"
                                    placeholder="note"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        }
                    </div>
                    <div key={"Checkout"} className="col-span-1 flex flex-col justify-between bg-light-acent dark:bg-dark-acent rounded-lg p-2">
                        <OrderSumary
                            isLoading={isLoading}
                            items={cartData?.items}
                            totalPrice={totalPrice}
                        />
                        <div
                            className={`
                                w-full flex                            
                                ${showConfirmation ? "flex-col" : "flex-row"}
                                 gap-2 mt-2 
                                ${isLoading && "opacity-0"}`}
                        >
                            <ButtonWithText
                                key={"Back to cart"}
                                textButton={showConfirmation ? "Back to checkout" : "Back to cart"}
                                buttonSize="full"
                                buttonVariant="transparent"
                                type="button"
                                onClick={handleBack}
                            />
                            {preferenceId === "" ?
                                <>
                                    {showConfirmation
                                        ?
                                        <ButtonWithText
                                            key={"Confirm"}
                                            textButton={"Confirm"}
                                            buttonSize="full"
                                            buttonVariant="backgroundColor"
                                            type="button"
                                            onClick={handleConfirmation}
                                        />
                                        :
                                        <ButtonWithText
                                            key={"Continue to payment"}
                                            textButton={"Continue to payment"}
                                            buttonSize="full"
                                            buttonVariant="backgroundColor"
                                            type="submit"
                                        />
                                    }
                                </>
                                :
                                <Wallet
                                    initialization={{ preferenceId, redirectMode: 'modal', marketplace: true }}
                                    customization={
                                        {
                                            visual: {

                                            },
                                            texts: { valueProp: 'security_safety' }
                                        }}
                                    brand="Hardware Store"
                                    locale="es-AR"
                                />
                            }
                        </div>
                    </div>
                </div>
            </BasicForm>
            <Toaster />
        </div>
    )
}