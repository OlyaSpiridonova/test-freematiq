import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Flag from 'react-world-flags';
import { createCurrencyList } from '../../services/getCurency';
import { currencyActions } from '../../store/currency/actions';
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
  styled,
} from '@mui/material';

export const TableCellCentered = styled(TableCell)`
  text-align: center;
`;

function CurrenciesList() {
  const dispatch = useDispatch();
  const { currencyList } = useSelector((state) => state.currency);

  useEffect(() => {
    createCurrencyList()
      .then((newList) => {
        dispatch(currencyActions.setCurrencyList(newList));
      })
      .catch(() => {
        alert('Извините, сервис курсов валют недоступен');
      });
    //eslint-disable-next-line
  }, []);

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
                <TableCellCentered>Флаг</TableCellCentered>
                <TableCellCentered>Символ</TableCellCentered>
                <TableCellCentered>Буквенный код</TableCellCentered>
                <TableCellCentered>Единиц</TableCellCentered>
                <TableCellCentered>Валюта</TableCellCentered>
                <TableCellCentered>Курс</TableCellCentered>
              </TableRow>
            </TableHead>
            <TableBody>
              {currencyList.map(
                ({ CharCode, Nominal, Name, Value, flag, symbol }) => (
                  <TableRow key={Name + 'key'}>
                    <TableCellCentered>
                      <Flag
                        code={flag}
                        height="16"
                        fallback={<Icon>flag</Icon>}
                      />
                    </TableCellCentered>
                    <TableCellCentered>
                      {symbol ? (
                        <Typography variant="h5">{symbol}</Typography>
                      ) : (
                        <Icon>toll</Icon>
                      )}
                    </TableCellCentered>
                    <TableCellCentered>{CharCode}</TableCellCentered>
                    <TableCellCentered>{Nominal}</TableCellCentered>
                    <TableCellCentered>{Name}</TableCellCentered>
                    <TableCellCentered>{Value}</TableCellCentered>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}

export default CurrenciesList;
