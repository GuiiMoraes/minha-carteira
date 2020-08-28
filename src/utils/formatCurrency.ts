const formatCurrency = (current: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(current);
};

export default formatCurrency;
