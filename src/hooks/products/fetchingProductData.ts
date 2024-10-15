import { IProductResponse } from "@/types/product.types";
import { TSortOptions } from "@/types/userInterface.types";
import { AxiosInstance } from "axios";

export interface IGetAllProducts {
    pageParam: number;
    LENGTHPAGE: number;
    dataProductsInstance: AxiosInstance;
    sortOption?: TSortOptions;
    searchTerm?: string;
}

export const getAllProducts = async ({ pageParam, LENGTHPAGE, dataProductsInstance, sortOption, searchTerm }: IGetAllProducts) => {
    const response = await dataProductsInstance.get("products", {
        params: {
            lengthPage: LENGTHPAGE,
            offset: pageParam * LENGTHPAGE,
            sort: sortOption,
            searchTerm: searchTerm
        }
    });
    return {
        data: response.data.data as IProductResponse[],
        nextPage: pageParam + 1,
        isLastPage: response.data.data.length < LENGTHPAGE,
    };
}