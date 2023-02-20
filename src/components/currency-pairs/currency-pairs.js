import { useState } from 'react';
import { Grid, Button } from '@mui/material';
import CurrencySelect from '../currency-select/currency-select';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFavorite } from '../../store/favorites/actions';

function СurrencyPairs() {
  const [currencuIn, setCurrencuIn] = useState('');
  const [currencuOut, setCurrencuOut] = useState('');

  const { currencyList } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  function currencyData() {
    if (!currencuIn || !currencuOut) return;
    const dataCurrencyIn = currencyList.find(
      (item) => item.CharCode === currencuIn
    );
    const dataCurrencyOut = currencyList.find(
      (item) => item.CharCode === currencuOut
    );
    const curencyPair = {
      id: dataCurrencyOut.ID + dataCurrencyIn.ID,
      codeOut: dataCurrencyOut.CharCode,
      valuteOut: dataCurrencyOut.Name,
      flagOut: dataCurrencyOut.flag,
      symbolOut: dataCurrencyOut.symbol,
      unit: dataCurrencyOut.Nominal,
      codeIN: dataCurrencyIn.CharCode,
      valuteIn: dataCurrencyIn.Name,
      flagIn: dataCurrencyIn.flag,
      symbolIn: dataCurrencyIn.symbol,
      course: (dataCurrencyIn.Value / dataCurrencyOut.Value).toFixed(4), //Рассчитать
    };
    return curencyPair;
  }

  const addPair = () => {
    if (!currencuIn || !currencuOut) {
      alert('Сначала выберите пару');
    }
    dispatch(currencyFavorite.setCurrencyFavorite(currencyData()));
    console.log('Новая пара', currencuIn, currencuOut);
  };

  return (
    <>
      <Grid item md={5}>
        <CurrencySelect
          charCode={currencuIn}
          setValue={setCurrencuIn}
          type={'in'}
        />
      </Grid>
      <Grid item md={5}>
        <CurrencySelect
          charCode={currencuOut}
          setValue={setCurrencuOut}
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
