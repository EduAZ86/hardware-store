import { TPrice } from "./product.types";

export interface IFavoriteItem {
    productID: string;
}

export interface IFavorites {
    userID: string;
    items: IFavoriteItem[];
}

export interface IFavoriteItemResponse extends IFavoriteItem {
    name: string;
    image: string;
    price: TPrice;
}
export interface IFavoritesResponse {
    userID: string;
    items: IFavoriteItemResponse[];
    updatedAt: string;
}