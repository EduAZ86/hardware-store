import { Date } from "mongoose";
type TCategory =
    | 'laptop'
    | 'processor'
    | 'graphics'
    | 'memory'
    | 'storage'
    | 'motherboard'
    | 'power supply'
    | 'case'
    | 'monitor'
    | 'keyboard'
    | 'mouse'
    | 'headset'
    | 'speaker'
    | 'casing'
    | 'fan'
    | 'other';
type TPrice = {
    price: number;
    percentageDiscount: number;
    descriptionDiscount?: string;
}
type TDimensions = {
    length?: number;
    width?: number;
    height?: number;
    weight?: number;
}

export interface IProduct {
    name: string;
    description: string;
    category: TCategory;
    brand: string;
    modelProduct: string;
    sku: string;
    price: TPrice;
    releaseDate: Date;
    images: string[];
    averageRating?: number;
    dimensions?: TDimensions;
    warranty?: string;
    manufacturer: string;
    stock: number;
}

export interface IProductResponse extends IProduct {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
