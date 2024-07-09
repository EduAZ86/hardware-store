export const priceFormatter = (number: number): string => {
    const numberString = number.toString()
    if (numberString.includes('.')) {
        const DecimalPart = numberString.split('.')[1];
        if (numberString.split('.')[1].length >= 2) {
            return `${numberString.split('.')[0]}.${DecimalPart.slice(0, 2)}`
        }
        if (numberString.split('.')[1].length === 1) {
            return `${numberString.split('.')[0]}.${DecimalPart}0`
        }
        return `${numberString.split('.')[0]}.00`
    }
    else {
        return `${numberString}.00`
    }
}