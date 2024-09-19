import { IFavoritesResponse } from "@/types/favorites";
import { AxiosInstance } from "axios";

export const getFavorites = async (userID: string, dataFavoritesInstance: AxiosInstance) => {
    const response = await dataFavoritesInstance.get("/favorites", {
        params: {
            userID: userID
        }
    })
    return response.data.data as IFavoritesResponse
};

export const addProductToFavorites = async (productID: string, userID: string, dataFavoritesInstance: AxiosInstance) => {
    const response = await dataFavoritesInstance.post("/favorites",
        {
            params: {
                userID: userID,
                productID: productID
            }
        }
    )
    return response.data.data as IFavoritesResponse
};

export const deleteProductFavorites = async (productID: string, userID: string, dataFavoritesInstance: AxiosInstance) => {
    const response = await dataFavoritesInstance.delete("/favorites", {
        params: {
            userID: userID,
            productID: productID
        }
    })
    return response.data.data as IFavoritesResponse
};


export const updateFavorites = async (updatedFavorites: IFavoritesResponse, userID: string, dataFavoritesInstance: AxiosInstance) => {
    const response = await dataFavoritesInstance.patch("/favorites", updatedFavorites, {
        params: {
            userID: userID,
        }
    })
    return response.data.data as IFavoritesResponse
};
