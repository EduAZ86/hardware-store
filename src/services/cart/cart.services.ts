import CartModel from "@/models/cart";
import { ICart } from "@/types/cart.types";
import mongoose from "mongoose";
import { CartPartialSchema, CartSchema } from "./validation.schema";



export const getCartByUserID = async (userID: string) => {
    try {
        const userObjectID = new mongoose.Types.ObjectId(userID);
        const cart = await CartModel.findOne({ userID: userObjectID }).lean().populate('items.product').exec();
        return cart
    } catch (error) {
        throw new Error('Error retrieving cart');
    }
}

export const postNewCart = async (cartData: ICart) => {
    try {
        const parsedCart = CartSchema.parse(cartData);
        const userObjectID = new mongoose.Types.ObjectId(parsedCart.userID);
        const newCart = new CartModel({
            userID: userObjectID,
            items: parsedCart.items,
            totalPrice: parsedCart.totalPrice,
            totalQuantity: parsedCart.totalQuantity,
            status: cartData.status || 'active'
        })
        await newCart.save();
        return newCart

    } catch (error: any) {
        throw new Error(error.message || 'Error saving new cart');
    }
}

export const getCartByCartID = async (cartID: string) => {
    try {
        if (!cartID) {
            throw new Error('cartID is required');
        }
        const cart = await CartModel.findById(cartID)
        return cart
    } catch (error) {
        throw new Error('Error retrieving cart');
    }
}

export const deleteCart = async (cartID: string) => {
    try {
        if (!cartID) {
            throw new Error('cartID is required');
        }
        const cart = await CartModel.findByIdAndDelete(cartID)
        return cart
    } catch (error) {
        throw new Error('Error deleting cart');
    }
}
export const updateCart = async (cartID: string, cartData: Partial<ICart>) => {
    try {
        if (!cartID) {
            throw new Error('cartID is required');
        }

        const parsedCart = CartPartialSchema.parse(cartData);

        const updateData: any = {};
        if (parsedCart.userID) {
            updateData.userID = new mongoose.Types.ObjectId(parsedCart.userID);
        }
        if (parsedCart.items) {
            updateData.items = parsedCart.items.map((item) => ({
                ...item,
                productID: new mongoose.Types.ObjectId(item.productID)
            }));
        }
        if (parsedCart.totalPrice !== undefined) {
            updateData.totalPrice = parsedCart.totalPrice;
        }
        if (parsedCart.totalQuantity !== undefined) {
            updateData.totalQuantity = parsedCart.totalQuantity;
        }
        if (parsedCart.status) {
            updateData.status = parsedCart.status;
        }

        const updatedCart = await CartModel.findByIdAndUpdate(cartID, updateData, { new: true });

        if (!updatedCart) {
            throw new Error('Cart not found');
        }
        return updatedCart;
    } catch (error: any) {
        throw new Error(error.message || 'Error updating cart');
    }
};
