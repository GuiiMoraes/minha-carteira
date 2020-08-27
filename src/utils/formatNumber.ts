const formatNumber = (numberToFormat: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numberToFormat);
};

export default formatNumber;
