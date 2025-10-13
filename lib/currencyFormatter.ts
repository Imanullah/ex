const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ',',
  decimalSeparator: '.',
  symbol: '$',
};

const currencyFormatter = (value: any, options: any) => {
  if (typeof value !== 'number') value = 0.0;
  options = { ...defaultOptions, ...options };
  value = value.toFixed(options.significantDigits);

  const [currency, decimal] = value.split('.');
  return `${options.symbol} ${currency.replace(/\B(?=(\d{3})+(?!\d))/g, options.thousandsSeparator)}${options.decimalSeparator}${decimal}`;
};

export const currencyFormat = (currency: string = 'USD', lang: string = 'en-US') => {
  const cur = Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency,
    // useGrouping: true,
    // maximumSignificantDigits: 3,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return cur;
};
