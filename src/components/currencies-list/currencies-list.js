import {
  Typography,
  Grid,
  Icon,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  Paper,
  TableBody,
} from '@mui/material';

function CurrenciesList() {
  return (
    <>
      <Typography component="h1" variant="h4" my={3}>
        Список курсов валют к Рублю
      </Typography>
      <Grid item xs={12} md={6}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Флаг</TableCell>
                <TableCell>Символ</TableCell>
                <TableCell>Буквенный код</TableCell>
                <TableCell>Единиц</TableCell>
                <TableCell>Валюта</TableCell>
                <TableCell>Курс</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Icon>flag</Icon>
                </TableCell>
                <TableCell>
                  <Icon>money</Icon>
                </TableCell>
                <TableCell>USD</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Доллар США</TableCell>
                <TableCell>70,5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default CurrenciesList;
