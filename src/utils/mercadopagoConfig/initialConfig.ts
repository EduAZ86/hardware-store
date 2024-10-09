import { ICartItemResponse } from "@/types/cart.types";
import { Preference } from "mercadopago";
import { errorLogSave } from "@/services/error/errorLogService";
import { PreferenceCreateData } from "mercadopago/dist/clients/preference/create/types";
import { Items } from "mercadopago/dist/clients/commonTypes"
import { client } from "./mpInitialConfig";

export interface MPitems extends Pick<Items,
    | "id"
    | "title"
    | "quantity"
    | "unit_price"
    | "currency_id"
    | "picture_url"
> {
    id: string
    title: string
    quantity: number
    unit_price: number
}

export class mPItemClass implements MPitems {
    id: string
    title: string
    quantity: number
    unit_price: number
    currency_id: string
    picture_url: string
    constructor(item: ICartItemResponse) {
        this.id = item.productID;
        this.title = item.name;
        this.quantity = item.quantity;
        this.unit_price = item.price.price - (item.price.price * item.price.percentageDiscount / 100);
        this.picture_url = item.image
        this.currency_id = "ARS";
    }
}


const createPreference = (items: ICartItemResponse[]) => {
    
    const baseURl = process.env.NEXT_PUBLIC_MERCADO_PAGO_URL as string;

    const itemsMP = items.map((item) => {
        return new mPItemClass(item)
    })
    const preferenceData: PreferenceCreateData = {
        body: {
            items: itemsMP,
            back_urls: {
                success: `${baseURl}/`,
                failure: `${baseURl}/checkout/failure`,
                pending: `${baseURl}/checkout/pending`,
            },
            auto_return: "approved",
        },
    }
    return preferenceData
}

export const sendPreferencesToMP = async (items: ICartItemResponse[]) => {
    const preference = new Preference(client)
    const preferenceData = createPreference(items)
    try {
        const preferenceResponse = await preference.create(preferenceData)
        if (!preferenceResponse) {
            throw new Error('Empty or invalid response from Mercado Pago');
        }
        return preferenceResponse
    } catch (error: any) {
        console.log("error", error)
        errorLogSave(error)
    }
}

