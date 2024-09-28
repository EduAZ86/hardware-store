export function deepMerge<T>(target: T, source: Partial<T>): T {
    const output = { ...target };
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (
                typeof source[key] === 'object' &&
                source[key] !== null &&
                !Array.isArray(source[key])
            ) {
                output[key] = deepMerge(output[key], source[key]);
            } else {
                output[key] = source[key] as any;
            }
        }
    }
    return output;
}
