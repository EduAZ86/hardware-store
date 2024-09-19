import { ICart, ICartResponse } from "@/types/cart.types";
import { AxiosInstance } from "axios";

export const getCartUser = async (userID: string, dataUserCartInstance: AxiosInstance) => {
    try {
        const response = await dataUserCartInstance.get(`/usercart/`,
            {
                params: {
                    userID: userID
                }
            }
        );
        return response.data.data as ICartResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const addProductToCart = async (productID: string, userID: string, dataUserCartInstance: AxiosInstance) => {
    try {
        const response = await dataUserCartInstance.post(`/usercart`,
            { productID: productID },
            {
                params: {
                    id: userID
                }
            }
        );
        return response.data.data as ICartResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const updateCart = async (updatedCart: ICart, userID: string, dataUserCartInstance: AxiosInstance) => {
    try {
        const response = await dataUserCartInstance.put(`/usercart`,
            updatedCart,
            {
                params: {
                    id: userID
                }
            }
        );
        return response.data.data as ICartResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const updateProductsCart = async ({ productID, quantity }: { productID: string, quantity: number }, userID: string, dataUserCartInstance: AxiosInstance) => {
    try {
        const response = await dataUserCartInstance.patch(`/usercart`,
            {
                productID: productID,
                quantity: quantity
            },
            {
                params: {
                    id: userID
                }
            }
        );
        return response.data.data as ICartResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}

export const deleteProductCart = async (productID: string, userID: string, dataUserCartInstance: AxiosInstance) => {
    try {
        const response = await dataUserCartInstance.delete(`/usercart`, {
            params: {
                productID: productID,
                userID: userID
            }
        });
        return response.data.data as ICartResponse
    } catch (error) {
        console.log(error);
        throw new Error("Error fetching data");
    }
}