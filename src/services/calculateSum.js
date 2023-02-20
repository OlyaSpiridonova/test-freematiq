export const calculateSum = (charCodeIn, charCodeOut, amount, currencyList) => {
  console.log('calcData', charCodeIn, charCodeOut, amount);
  const exchangeRate = defineRate(charCodeIn, charCodeOut, currencyList);
  return (exchangeRate * +amount).toFixed(3);
};
//Определение ставки
function defineRate(charCodeIn, charCodeOut, currencyList) {
  if (charCodeIn === charCodeOut) return 1;
  const currencyIn = currencyList.find((item) => item.CharCode === charCodeIn);
  const currencyOut = currencyList.find(
    (item) => item.CharCode === charCodeOut
  );
  return (
    ((currencyIn.Value / currencyIn.Nominal) * currencyOut.Nominal) /
    currencyOut.Value
  );
}
