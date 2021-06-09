export function useCurrencyFormatter(currency: string) {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 })
    return (value: number) => formatter.format(value)
}