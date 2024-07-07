import { TBackgroundGradient, TColors } from "../types/tailwindStyleTypes";

type prefix = "bg-light-" | "dark:bg-dark-";

type textPrefix = "text-light-" | "dark:text-dark-"

type PrefixHover = "group-hover:bg-light-" | "dark:group-hover:bg-dark-" | "group-hover:text-light-" | "dark:group-hover:text-dark-";


export const backgroundColorAsign = (color: TColors, prefix: prefix): string => {
    const colors: Record<TColors, string> = {
        primary: `${prefix}primary`,
        secondary: `${prefix}secondary`,
        background: `${prefix}background`,
        acent: `${prefix}acent`,
        text: `${prefix}text`,
        error: `${prefix}error`,
        transparent: `bg-transparent dark:bg-transparent`
    };
    return colors[color] || ""
};

export const textColorAsign = (color: TColors, prefix: textPrefix): string => {
    const colors: Record<TColors, string> = {
        primary: `${prefix}primary`,
        secondary: `${prefix}secondary`,
        background: `${prefix}background`,
        acent: `${prefix}acent`,
        text: `${prefix}text`,
        error: `${prefix}error`,
        transparent: `text-transparent dark:text-transparent`
    };
    return colors[color] || ""
};

export const hoverColorAsign = (color: TColors, prefix: PrefixHover): string => {
    const colors: Record<TColors, string> = {
        primary: `${prefix}primary`,
        secondary: `${prefix}secondary`,
        background: `${prefix}background`,
        acent: `${prefix}acent`,
        text: `${prefix}text`,
        error: `${prefix}error`,
        transparent: "group-hover:bg-transparent dark:group-hover:bg-transparent"
    };
    return colors[color] || '';
};


export const backgroundGradientAsign = (color1: TColors | string, color2: TColors | string, directionGradient: TBackgroundGradient): string => {
    const dark = "dark:" + directionGradient + " " + "from-dark-" + color1 + " " + "to-dark-" + color2;
    const light = directionGradient + " " + "from-light-" + color1 + " " + "to-light-" + color2;
    return dark + " " + light
}