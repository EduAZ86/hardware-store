import UserModel from "@/models/user";
import { IFavoriteItem, IFavoriteItemResponse, IFavorites, IFavoritesResponse } from "@/types/favorites";
import { getProductsByProductID } from "../product/product.services";

export const getFavoritesByUserID = async (userID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    const favoritesData: IFavoritesResponse = {
        userID: userID,
        items: [],
        updatedAt: userData.updatedAt ? userData.updatedAt.toString() : new Date().toISOString(),
    }
    if (!userData.favoriteProducts || userData.favoriteProducts.length === 0) {
        return favoritesData;
    }
    const favoritesItems: IFavoriteItemResponse[] = await Promise.all(
        userData.favoriteProducts.map(async (item) => {
            const product = await getProductsByProductID(item);
            const itemResponse: IFavoriteItemResponse = {
                productID: item,
                name: product.name,
                image: product.images[0],
                price: product.price
            }
            return itemResponse
        }
        )
    )
    favoritesData.items = favoritesItems
    return favoritesData
}

export const updateFavorites = async (userID: string, favorites: IFavoriteItem[]) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    if (!favorites) {
        throw new Error('Favorites not found');
    }
    userData.favoriteProducts = favorites.map((item) => item.productID);
    await userData.save();
    const favoritesData = await getFavoritesByUserID(userID);
    return favoritesData
}

export const deleteItemFavorites = async (userID: string, productID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    if (!userData.favoriteProducts) {
        userData.favoriteProducts = [];
    }
    const updateFavorites = userData.favoriteProducts.filter((item) => item.toString() !== productID);
    userData.favoriteProducts = updateFavorites;
    await userData.save();
    const favoritesData = await getFavoritesByUserID(userID);
    return favoritesData
}

export const postNewItemFavorites = async (userID: string, productID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    const fonundProduct = await getProductsByProductID(productID);
    if (!fonundProduct) {
        throw new Error('Product not found');
    }
    if (!userData.favoriteProducts) {
        userData.favoriteProducts = [];
    }
    const findItem = userData.favoriteProducts.find((item) => item.toString() === productID);
    if (findItem) {
        const favoritesNoUpdate = await getFavoritesByUserID(userID);
        return favoritesNoUpdate
    }
    userData.favoriteProducts.push(productID);
    await userData.save();
    const favoritesData = await getFavoritesByUserID(userID);
    return favoritesData
}

