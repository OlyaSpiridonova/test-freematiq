import { Grid, Typography } from '@mui/material';
import CurrencyPairs from '../currency-pairs/currency-pairs';
import FavoritesCurrenciesList from '../favorites-currencies-list/favorites-currencies-list';

function FavoritesCurrencies() {
  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Избранные валютные пары
      </Typography>
      <Grid justifyContent="center" container>
        <Grid justifyContent="center" spacing={4} item container md={8} xs={4}>
          <CurrencyPairs />
        </Grid>
        <FavoritesCurrenciesList />
      </Grid>
    </>
  );
}

export default FavoritesCurrencies;
