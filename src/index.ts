export function predictPrice(basePrice: number): number {
    const adjustment = (Math.random() * 0.2) * basePrice;
    return basePrice + adjustment;
}