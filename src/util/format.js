export const { format: formatPricePTBR } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

export const { format: formatPriceENUS } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
