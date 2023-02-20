export const currencyActionTypes = {
  SET_CURRENCY_LIST: 'SET_CURRENCY_LIST',
};

export const currencyActions = {
  setCurrencyList: (payload) => ({
    type: currencyActionTypes.SET_CURRENCY_LIST,
    payload,
  }),
};
