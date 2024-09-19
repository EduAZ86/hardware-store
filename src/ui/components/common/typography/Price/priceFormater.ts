export const priceFormatter = (value: number): string => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(value).replace('ARS', '$');
}