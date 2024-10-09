"use client"
import { FC, useEffect, useState } from "react";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

import { IMercadopagoCheckoutProProps } from "./types";
import { postPayment } from "@/utils/mercadopagoConfig/fetchMercadopago";

export const MercadopagoCheckoutPro: FC<IMercadopagoCheckoutProProps> = ({
    items,
    userID
}) => {
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

    const [preferenceID, setPreferenceID] = useState<string>('');
    const handlePayment = async () => {
        const preferenceResponse = await postPayment(items, userID);
        console.log("preferenceResponse", preferenceResponse);
        if (preferenceResponse) {
            setPreferenceID(preferenceResponse.id as string);
        }
    }
    useEffect(() => {
        initMercadoPago(publicKey);
        handlePayment();
    }, []);
    return (
        <div
            id="wallet_container"
            className="w-full h-full flex flex-col justify-center items-center"
        >
            <div
                id="wallet"
                className="w-56 h-20"
            >
                <Wallet
                    initialization={{ preferenceId: preferenceID, redirectMode: 'self' }}
                    customization={{ texts: { valueProp: 'smart_option' } }}
                />
            </div>
        </div>
    )
}