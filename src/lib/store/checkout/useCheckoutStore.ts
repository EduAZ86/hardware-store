import { IOrder } from "@/types/order.types";
import { create } from "zustand";
import { ICheckoutStore } from "./type";
import { deepMerge } from "@/utils/deepMerge";

const initialOrderData: IOrder = {
    userID: "",
    userName: "",
    phoneNumber: "",
    email: "",
    items: [],
    totalAmount: 0,
    shippingData: {
        address: "",
        city: "",
        postalCode: "",
        country: ""
    },
    orderNotes: "",
    status: "pending",
    payment: {
        paymentMethod: "pending",
        paymentStatus: false
    }
}

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
    checkoutData: initialOrderData,
    setCheckoutData: (data) => set({
        checkoutData: deepMerge(initialOrderData, data)
    }),
    clearCheckoutData: () => set({ checkoutData: initialOrderData }),
}));