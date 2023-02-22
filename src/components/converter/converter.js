import { Grid, IconButton, Icon, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { calculateSum } from '../../services/calculateSum';
import ConverterInput from '../converter-input/converter-input';
import СurrencySelect from '../currency-select/currency-select';

function Converter() {
  const { currencyList } = useSelector((state) => state.currency);
  const [currencyData, setCurrencyData] = useState({
    charCodeIn: 'USD',
    charCodeOut: 'RUB',
    rate: '',
    amountIn: '',
    amountOut: '',
  });

  const setCharCodeIn = (code) => {
    const amountOut = calculateSum(
      code,
      currencyData.charCodeOut,
      currencyData.amountIn,
      currencyList
    );
    setCurrencyData({ ...currencyData, charCodeIn: code, amountOut });
  };

  const setCharCodeOut = (code) => {
    const amountOut = calculateSum(
      currencyData.charCodeIn,
      code,
      currencyData.amountIn,
      currencyList
    );
    setCurrencyData({ ...currencyData, charCodeOut: code, amountOut });
  };

  const setAmountIn = (amount) => {
    const amountOut = calculateSum(
      currencyData.charCodeIn,
      currencyData.charCodeOut,
      amount,
      currencyList
    );
    setCurrencyData({ ...currencyData, amountIn: amount, amountOut });
  };

  const setAmountOut = (amount) => {
    const amountIn = calculateSum(
      currencyData.charCodeOut,
      currencyData.charCodeIn,
      amount,
      currencyList
    );
    setCurrencyData({ ...currencyData, amountOut: amount, amountIn });
  };

  const reverseCurrency = () => {
    const amountOut = calculateSum(
      currencyData.charCodeOut,
      currencyData.charCodeIn,
      currencyData.amountIn,
      currencyList
    );
    setCurrencyData({
      ...currencyData,
      charCodeIn: currencyData.charCodeOut,
      charCodeOut: currencyData.charCodeIn,
      amountOut,
    });
  };

  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Конвертер курса валют
      </Typography>
      <Grid justifyContent="center" container>
        <Grid justifyContent="center" item container md={9} xs={4} spacing={3}>
          <Grid justifyContent="center" item md={6}>
            <СurrencySelect
              charCode={currencyData.charCodeIn}
              setValue={setCharCodeIn}
              type={'in'}
            />
          </Grid>
          <Grid justifyContent="center" item md={6}>
            <СurrencySelect
              charCode={currencyData.charCodeOut}
              setValue={setCharCodeOut}
              type={'out'}
            />
          </Grid>
          <Grid justifyContent="center" item container mt={5}>
            <Grid item md={5}>
              <ConverterInput
                setAmount={setAmountIn}
                charCode={currencyData.charCodeIn}
                value={currencyData.amountIn}
              />
            </Grid>
            <Grid item md={2}>
              <IconButton onClick={reverseCurrency} aria-label="delete">
                <Icon fontSize="large">compare_arrows</Icon>
              </IconButton>
            </Grid>
            <Grid item md={5}>
              <ConverterInput
                setAmount={setAmountOut}
                charCode={currencyData.charCodeOut}
                value={currencyData.amountOut}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Converter;
