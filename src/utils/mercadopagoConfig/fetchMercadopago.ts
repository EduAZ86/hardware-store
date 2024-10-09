"use client"

import { ICartItemResponse } from "@/types/cart.types";
import createAxiosInstance from "../../lib/axios/axiosInstance";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";

export const postPayment = async (items: ICartItemResponse[], id: string) => {
    const mercadopagoAxiosInstance = createAxiosInstance(true, id);
    try {
        const response = await mercadopagoAxiosInstance.post("/payment", items);
        return response.data.data as PreferenceResponse;
    } catch (error) {
        console.log(error);
    }
}