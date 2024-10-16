import { AxiosInstance } from "axios";
import { TSortOptions } from "@/types/userInterface.types";
import { IProductResponse, IProductResults } from "@/types/product.types";

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
    const productResponse: IProductResults = {
        data: response.data.data.data as IProductResponse[],
        totalResults: response.data.data.totalResults,
        lengthPage: LENGTHPAGE,
        totalPages: response.data.data.totalPages,
        nextPage: pageParam + 1,
        isLastPage: response.data.data.length < LENGTHPAGE,
    }
    return productResponse
}