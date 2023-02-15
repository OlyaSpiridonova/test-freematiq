import {
  Select,
  Grid,
  InputLabel,
  FormControl,
  MenuItem,
  Icon,
  Typography,
  Button,
} from '@mui/material';

function СurrencyЗairs() {
  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Избранные валютные пары
      </Typography>
      <Grid justifyContent="center" container>
        <Grid item container md={12}>
          <Grid item md={5}>
            <FormControl variant="standard" sx={{ minWidth: 150 }}>
              <InputLabel id="curency-in">У меня есть</InputLabel>
              <Select labelId="curency-in" mx={3}>
                <MenuItem value={'RUB'}>RUB</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={5}>
            <FormControl variant="standard" sx={{ minWidth: 150 }}>
              <InputLabel id="curency-out">Хочу получить</InputLabel>
              <Select labelId="curency-out" mx={3}>
                <MenuItem value={'USD'}>
                  <Icon fontSize="large">flag</Icon>
                  USD
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2}>
            <Button variant="contained">Добавить пару</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default СurrencyЗairs;
