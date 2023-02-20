import {
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Icon,
  Grid,
} from '@mui/material';
import { useSelector } from 'react-redux';
import Flag from 'react-world-flags';

function СurrencySelect({ type, setValue, charCode }) {
  const { currencyList } = useSelector((state) => state.currency);

  const handleChanged = ({ target }) => {
    setValue(target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <InputLabel id="curency">
          {type === 'in' ? 'У меня есть' : 'Хочу получить'}
        </InputLabel>
        <Select
          labelId="currency"
          value={charCode}
          onChange={handleChanged}
          mx={3}
        >
          {currencyList.map(({ CharCode, Name, flag }) => (
            <MenuItem
              key={Name + 'key'}
              value={CharCode}
              sx={{ backgroundColor: 'rgba(211, 211, 211, 0.4)' }}
            >
              <Grid container>
                <Grid item md={4}>
                  {CharCode}
                </Grid>
                <Grid item md={6}>
                  <Flag code={flag} height="16" fallback={<Icon>flag</Icon>} />
                </Grid>
              </Grid>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default СurrencySelect;
