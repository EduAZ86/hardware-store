import { Items } from "mercadopago/dist/clients/commonTypes"
import { ICartItemResponse } from "./cart.types"

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



export class MPItemClass implements MPitems {
    id: string
    title: string
    quantity: number
    unit_price: number
    currency_id: string
    picture_url: string
    constructor(item: ICartItemResponse) {
        this.id = item._id;
        this.title = item.name;
        this.quantity = item.quantity;
        this.unit_price = item.price.price - (item.price.price * item.price.percentageDiscount);
        this.picture_url = item.image
        this.currency_id = "ARS";
    }
}