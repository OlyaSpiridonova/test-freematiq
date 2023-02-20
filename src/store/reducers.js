import { combineReducers } from 'redux';
import { currencyReducer as currency } from './currency/reducer';
import { currencyFavoriteReducer as currencyFavorite } from './favorites/reducer';

export const reducers = combineReducers({ currency, currencyFavorite });
