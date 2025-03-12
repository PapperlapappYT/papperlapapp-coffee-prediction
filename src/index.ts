export function predictPrice(basePrice: number): number {
    const adjustment = (Math.random() * 0.1) * basePrice;
    const addOrSubtract = Math.random() < 0.5 ? -1 : 1;
    return basePrice + (adjustment * addOrSubtract);
}