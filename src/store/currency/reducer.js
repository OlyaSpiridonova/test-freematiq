import { currencyActionTypes } from './actions';

const initialState = {
  currencyList: ['fdg'],
};

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case currencyActionTypes.SET_CURRENCY_LIST:
      return { ...state, currencyList: action.payload };
    default:
      return state;
  }
};
