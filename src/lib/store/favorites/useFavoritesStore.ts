import { IFavoriteItemResponse, IFavoritesResponse } from "@/types/favorites";
import { IUseFavoritesStore } from "./types";
import { create } from "zustand";

const initialFavoritesStore: IFavoritesResponse = {
    userID: '',
    items: [],
    updatedAt: ''
}

export const useFavoritesStore = create<IUseFavoritesStore>((set) => ({
    favoritesData: initialFavoritesStore,
    setFavoritesData: (favoritesData: IFavoritesResponse) => set({ favoritesData }),
    removeItemFavorites: (productID: string) => set((state) => {
        const updatedItems = state.favoritesData?.items.filter((item: IFavoriteItemResponse) => item.productID !== productID);
        return {
            favoritesData: { ...state.favoritesData, items: updatedItems }
        }
    }),
    addProductToFavorites: (productID: string) => set((state) => {
        const findItem = state.favoritesData?.items.find((item: IFavoriteItemResponse) => item.productID === productID);
        if (findItem) {
            return {
                favoritesData: { ...state.favoritesData }

            }
        } else {
            
        }
        const updatedItems = [...state.favoritesData?.items, { productID }];
        return {
            favoritesData: { ...state.favoritesData, items: updatedItems }
        }
    })
}))