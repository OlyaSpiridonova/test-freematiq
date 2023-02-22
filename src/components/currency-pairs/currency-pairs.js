import { useState } from 'react';
import { Grid, Button } from '@mui/material';
import CurrencySelect from '../currency-select/currency-select';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFavorite } from '../../store/favorites/actions';
import { defineRate } from '../../services/calculateSum';

function СurrencyPairs() {
  const [currencyIn, setCurrencyIn] = useState('');
  const [currencyOut, setCurrencyOut] = useState('');

  const { currencyList } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  function defineCurrencyByCode(code) {
    return currencyList.find((item) => item.CharCode === code);
  }

  function currencyData() {
    console.log(currencyIn);
    console.log(defineCurrencyByCode(currencyIn));
    return {
      id:
        defineCurrencyByCode(currencyOut).ID +
        defineCurrencyByCode(currencyIn).ID,
      codeOut: currencyOut,
      valuteOut: defineCurrencyByCode(currencyOut).Name,
      flagOut: defineCurrencyByCode(currencyOut).flag,
      symbolOut: defineCurrencyByCode(currencyOut).symbol,
      unit: 1,
      codeIn: currencyIn,
      valuteIn: defineCurrencyByCode(currencyIn).Name,
      flagIn: defineCurrencyByCode(currencyIn).flag,
      symbolIn: defineCurrencyByCode(currencyIn).symbol,
      course: defineRate(currencyIn, currencyOut, currencyList),
    };
  }

  const addPair = () => {
    if (!currencyIn || !currencyOut) {
      alert('Сначала выберите пару');
    }
    dispatch(currencyFavorite.setCurrencyFavorite(currencyData()));
  };

  return (
    <>
      <Grid item md={5}>
        <CurrencySelect
          charCode={currencyIn}
          setValue={setCurrencyIn}
          type={'in'}
        />
      </Grid>
      <Grid item md={5}>
        <CurrencySelect
          charCode={currencyOut}
          setValue={setCurrencyOut}
          type={'out'}
        />
      </Grid>
      <Grid item md={2}>
        <Button onClick={addPair} variant="contained">
          Добавить пару
        </Button>
      </Grid>
    </>
  );
}

export default СurrencyPairs;
