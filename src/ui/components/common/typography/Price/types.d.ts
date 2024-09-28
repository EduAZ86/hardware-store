export interface IPriceProps {
    price: number;
    discount?: number;
    size?: "sm" | "xl" | "3xl";
    orientation?: "left" | "right" | "center";
}