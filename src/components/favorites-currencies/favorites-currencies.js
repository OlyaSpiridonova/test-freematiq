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
import СurrencySelect from '../currency-select/currency-select';
import FavoritesCurrenciesList from '../favorites-currencies-list/favorites-currencies-list';

function FavoritesCurrencies() {
  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Избранные валютные пары
      </Typography>
      <Grid justifyContent="center" container>
        <Grid item container md={8}>
          <Grid item md={5}>
            <СurrencySelect type={'in'} />
          </Grid>
          <Grid item md={5}>
            <СurrencySelect type={'out'} />
          </Grid>
          <Grid item md={2}>
            <Button variant="contained">Добавить пару</Button>
          </Grid>
        </Grid>
        <FavoritesCurrenciesList />
      </Grid>
    </>
  );
}

export default FavoritesCurrencies;
