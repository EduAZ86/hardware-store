import UserModel from "@/models/user";
import { ICart, ICartItemResponse, ICartResponse } from "@/types/cart.types";
import { ItemCart } from "@/types/user.types";
import { getProductsByProductID } from "../product/product.services";
import ProductModel from "@/models/product";

export const getCartByUserID = async (userID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    const CartUser: ICartResponse = {
        userID: userID,
        items: [],
        updatedAt: userData.updatedAt ? userData.updatedAt.toString() : new Date().toISOString(),
    }
    if (!userData.cartProducts || userData.cartProducts.length === 0) {
        return CartUser;
    }

    const cartItems: ICartItemResponse[] = await Promise.all(
        userData.cartProducts.map(async (item) => {
            const product = await getProductsByProductID(item.productID)
            const itemResponse: ICartItemResponse = {
                productID: item.productID,
                quantity: item.quantity,
                price: product.price,
                name: product.name,
                image: product.images[0]
            }
            return itemResponse
        })
    )
    CartUser.items = cartItems
    return CartUser
}

export const postNewItemCart = async (userID: string, productID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    const fonundProduct = await ProductModel.findById(productID);
    if (!fonundProduct) {
        throw new Error('Product not found');
    }
    const newItemCart: ItemCart = {
        productID: productID,
        quantity: 1
    }
    if (!userData.cartProducts) {
        userData.cartProducts = [];
    }
    const existingItem = userData.cartProducts.find((item) => item.productID.toString() === productID);
    if (!existingItem) {
        userData.cartProducts.push(newItemCart);
        await userData.save();
    }
    const cartData = await getCartByUserID(userID);
    return cartData
}

export const updateUserCart = async (userID: string, updatedCart: ICart) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    if (!userData.cartProducts) {
        userData.cartProducts = [];
    }
    userData.cartProducts = updatedCart.items
    await userData.save();
    const cartData = await getCartByUserID(userID);
    return cartData
}

export const updateItemCart = async (userID: string, { productID, quantity }: ItemCart) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    const fonundProduct = await ProductModel.findById(productID);
    if (!fonundProduct) {
        throw new Error('Product not found');
    }
    const updateItemCart: ItemCart = {
        productID: productID,
        quantity: quantity
    }
    if (!userData.cartProducts) {
        userData.cartProducts = [];
    }
    const updateCart = userData.cartProducts.map((item) => {
        if (item.productID.toString() === productID) {
            return updateItemCart
        }
        return item
    })
    userData.cartProducts = updateCart
    await userData.save();
    const cartData = await getCartByUserID(userID);
    return cartData
}

export const deleteItemCart = async (userID: string, productID: string) => {
    const userData = await UserModel.findById(userID);
    if (!userData) {
        throw new Error('User not found');
    }
    if (!userData.cartProducts) {
        userData.cartProducts = [];
    }
    const updateCart = userData.cartProducts.filter((item) => item.productID.toString() !== productID)
    userData.cartProducts = updateCart;
    await userData.save();
    const cartData = await getCartByUserID(userID);
    return cartData
}