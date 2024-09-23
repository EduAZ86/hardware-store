"use client"
import { FC } from "react"
import { ICheckoutProps } from "./types"
import { BasicForm, ButtonWithText, CardTitle, InputField, InputTextArea, Price, Title } from "../common"
import { useForm } from "react-hook-form"
import { useDataUserCart } from "@/hooks/carts/useDataUserCart"
import { useSession } from "next-auth/react"
import { CheckoutItemCard } from "./CheckoutItemCard/CheckoutItemCard"

export const CheckoutComponent: FC<ICheckoutProps> = ({

}) => {
    const { data: session } = useSession()
    const userID = session?.user.id
    const { handleSubmit, register, reset, formState: { errors }, watch } = useForm()
    const { cartData, totalPrice } = useDataUserCart().useGetCartUser(userID as string)

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
            <div className="w-full grid grid-cols-3 gap-2">
                <div
                    className="col-span-2"
                >
                    <BasicForm>
                        <div
                            className={`
                            w-full
                            grid
                            grid-cols-1 sm:grid-cols-2
                            justify-items-center
                            gap-4
                            `}
                        >

                            <InputField
                                key={"User Name"}
                                label={"User Name"}
                                disabled={false}
                                id="name"
                                name="name"
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
                                type="text"
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
                                id="Order note"
                                name="Order note"
                                placeholder="note"
                                type="text"
                                register={register}
                                errors={errors}
                                requiredMessage="Order note is required"
                            />
                        </div>
                    </BasicForm>

                </div>
                <div key={"Checkout"} className="col-span-1 flex flex-col justify-between bg-light-acent dark:bg-dark-acent rounded-lg">
                    
                    <h3 className="text-dark-text dark:text-light-text text-lg text-center pt-4">Order sumary</h3>
                    {cartData?.items?.map((item) => (
                        <CheckoutItemCard
                            key={item.productID}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                    <Price
                        price={totalPrice}
                    />
                    <ButtonWithText
                        textButton="Checkout"
                        buttonSize="full"
                        buttonVariant="backgroundColor"
                        type="submit"
                        onClick={(event) => {
                            
                        }}
                    />
                </div>
            </div>

        </div>
    )
}