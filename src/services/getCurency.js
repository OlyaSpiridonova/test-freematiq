import { currency } from '@alfalab/data';
import { getAllISOCodes } from 'iso-country-currency';

const getCurency = async (url) => {
  const res = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
  if (!res.ok) {
    alert('Сервис курсов валют недоступен');
    throw new Error(`Could not fetch ${url}, recivied ${res.status}`);
  }
  return await res.json();
};

export const createCurrencyList = async () => {
  const currencyData = await getCurency();
  const currencyList = [
    {
      CharCode: 'RUB',
      Nominal: 1,
      Name: 'Российский рубль',
      Value: 1,
      flag: 'RUS',
      symbol: '₽',
    },
  ];
  for (const key in currencyData.Valute) {
    currencyList.push({
      ...currencyData.Valute[key],
      flag: defineFlag(currencyData.Valute[key].CharCode),
      symbol: defineSymbol(currencyData.Valute[key].CharCode),
    });
  }

  return currencyList;
};

const countryList = getAllISOCodes();

function defineFlag(CharCode) {
  if (CharCode === 'EUR') {
    return 'EU';
  }
  if (CharCode === 'USD') {
    return 'USA';
  }

  const country = countryList.find((item) => item.currency === CharCode);
  if (!country || !country.iso) return '';
  return country.iso;
}

function defineSymbol(code) {
  if (!currency.CURRENCY_SYMBOLS[code]) {
    return '';
  }
  return currency.CURRENCY_SYMBOLS[code];
}
