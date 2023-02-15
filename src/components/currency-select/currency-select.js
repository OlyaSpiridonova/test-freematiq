import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';

function СurrencySelect({ type }) {
  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="curency">
          {type === 'in' ? 'У меня есть' : 'Хочу получить'}
        </InputLabel>
        <Select labelId="curency" value={''} mx={3}>
          <MenuItem value={'RUB'}>RUB</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default СurrencySelect;
