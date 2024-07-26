import { Date, Document } from 'mongoose';

type Role = "admin" | "user"

export interface INewUser {
    username: string;
    email: string;
    password: string;
    role: Role;
    picture?: string;
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    picture?: string;
    role: 'admin' | 'user';
    favoriteProducts: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserDataBaseResponse extends IUser {
    _id: string;    
}