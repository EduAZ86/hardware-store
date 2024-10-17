import { TBrightness, TColors, TOpacity, TRounded } from "@/ui/types/tailwindStyleTypes";

export interface IBackgroundColorProps {
    backgroundColor: TColors;
    hoverBackgroundColor?: TColors;
    opacity?: TOpacity;
    hoverOpacity?: TOpacity;
    brigness?: TBrightness;
    customClassName?: string;   
}