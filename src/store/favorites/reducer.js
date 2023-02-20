import { currencyFavoriteTypes } from './actions';

const initialState = {
  currencyFavoriteItems: [
    {
      id: 'R01235',
      codeOut: 'RUB',
      valuteOut: 'Рубль РФ',
      flagOut: 'RUS',
      symbolOut: '₽',
      unit: '1',
      codeIN: 'USD',
      valuteIn: 'Доллар США',
      flagIn: 'USA',
      symbolIn: '$',
      course: '74.7588',
    },
    {
      id: 'R01239',
      codeOut: 'RUB',
      valuteOut: 'Рубль РФ',
      flagOut: 'RUS',
      symbolOut: '₽',
      unit: '1',
      codeIN: 'EUR',
      valuteIn: 'Евро',
      flagIn: 'EU',
      symbolIn: '€',
      course: '79.6104',
    },
  ],
};

export const currencyFavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case currencyFavoriteTypes.SET_CURRENCY_FAVORITE:
      return {
        ...state,
        currencyFavoriteItems: [...state.currencyFavoriteItems, action.payload],
      };

    case currencyFavoriteTypes.DELETE_CURRENCY_FAVORITE:
      return {
        ...state,
        currencyFavoriteItems: state.currencyFavoriteItems.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
