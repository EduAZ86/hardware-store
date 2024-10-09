"use client"
import { ICartItemResponse } from "@/types/cart.types";
import { postPayment } from "@/utils/mercadopagoConfig/fetchMercadopago";
export const getPreferenceID = async (items: ICartItemResponse[], userID: string, publicKey: string) => {
     const preferenceResponse = await postPayment(items, userID);
    return preferenceResponse
};  