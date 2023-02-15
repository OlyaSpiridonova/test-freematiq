import { Grid, TextField, IconButton, Icon, Typography } from '@mui/material';
import СurrencySelect from '../currency-select/currency-select';

function Converter() {
  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Конвертер курса валют
      </Typography>
      <Grid justifyContent="center" container>
        <Grid item container md={6}>
          <Grid item md={6}>
            <СurrencySelect type={'in'} />
          </Grid>
          <Grid item md={6}>
            <СurrencySelect type={'out'} />
          </Grid>
          <Grid item container mt={5}>
            <Grid item md={5}>
              <TextField
                id="sum-in"
                label="Введите сумму"
                type="number"
                helperText="1 RUR = 0.0137 USD"
              />
            </Grid>
            <Grid item md={2}>
              <IconButton aria-label="delete">
                <Icon fontSize="large">compare_arrows</Icon>
              </IconButton>
            </Grid>
            <Grid item md={5}>
              <TextField
                id="sum-out"
                label="Введите сумму"
                type="number"
                helperText="1 USD = 72.7923 RUR"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Converter;
