export const currencyFavoriteTypes = {
  SET_CURRENCY_FAVORITE: 'SET_CURRENCY_FAVORITE',
  DELETE_CURRENCY_FAVORITE: 'DELETE_CURRENCY_FAVORITE',
};

export const currencyFavorite = {
  setCurrencyFavorite: (payload) => ({
    type: currencyFavoriteTypes.SET_CURRENCY_FAVORITE,
    payload,
  }),

  deleteCurrencyFavorite: (payload) => ({
    type: currencyFavoriteTypes.DELETE_CURRENCY_FAVORITE,
    payload,
  }),
};
