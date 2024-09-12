import { Date, Document } from 'mongoose';
import { User } from 'next-auth';

type Role = "admin" | "user"

type ItemCart = {
    productID: string;
    quantity: number;
}

export interface INewUser {
    id?: string;
    username: string;
    email: string;
    password: string;
    role: Role;
    picture?: string;
}

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    picture?: string;
    role: 'admin' | 'user';
    favoriteProducts?: string[];
    cartProducts?: ItemCart[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserResponse extends Omit<IUser, "password"> {    
}

export interface User {
    _id: string;
}

export interface IUserSession {
    _id?: string;
    id: string;
    name: string;
    email: string;
    image?: string;
    userData: IUserResponse;
    token: string;
}

