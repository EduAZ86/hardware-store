import { Date } from "mongoose";
export enum ECategory {
    Laptop = 'laptop',
    Processor = 'processor',
    Graphics = 'graphics',
    Memory = 'memory',
    Storage = 'storage',
    Motherboard = 'motherboard',
    PowerSupply = 'power supply',
    Case = 'case',
    Monitor = 'monitor',
    Keyboard = 'keyboard',
    Mouse = 'mouse',
    Headset = 'headset',
    Speaker = 'speaker',
    Casing = 'casing',
    Fan = 'fan',
    Other = 'other'
}

export type TCategory = keyof typeof ECategory

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
