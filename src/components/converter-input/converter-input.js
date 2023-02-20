import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useSelector } from 'react-redux';

function ConverterInput({ setAmount, charCode, value }) {
  const { currencyList } = useSelector((state) => state.currency);
  const currency = currencyList.find((item) => item.CharCode === charCode);
  const handleInput = ({ target }) => {
    setAmount(target.value);
  };
  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="amount">{`Введите сумму ${charCode}`}</InputLabel>
        <OutlinedInput
          value={value}
          onInput={handleInput}
          id="amount"
          type="number"
          startAdornment={
            <InputAdornment position="start">
              {currency && currency.symbol ? currency.symbol : ''}
            </InputAdornment>
          }
          label={`Введите сумму ${charCode}`}
        />
      </FormControl>
    </>
  );
}

export default ConverterInput;
