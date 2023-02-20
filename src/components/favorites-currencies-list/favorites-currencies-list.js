import {
  Grid,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  Paper,
  TableBody,
  Icon,
  Button,
  styled,
} from '@mui/material';

import Flag from 'react-world-flags';
import { useDispatch, useSelector } from 'react-redux';
import { currencyFavorite } from '../../store/favorites/actions';

export const TableCellCentered = styled(TableCell)`
  text-align: center;
`;

function FavoritesCurrenciesList() {
  const { currencyFavoriteItems } = useSelector(
    (state) => state.currencyFavorite
  );
  const dispatch = useDispatch();

  const handleClickDelete = (currencyPair) => {
    dispatch(currencyFavorite.deleteCurrencyFavorite(currencyPair.id));
    console.log('delete');
  };

  return (
    <>
      <Grid item xs={12} md={12} mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCellCentered>Буквенный код</TableCellCentered>
                <TableCellCentered>Валюта</TableCellCentered>
                <TableCellCentered>Единиц</TableCellCentered>
                <TableCellCentered>Буквенный код</TableCellCentered>
                <TableCellCentered>Валюта</TableCellCentered>
                <TableCellCentered>Курс</TableCellCentered>
                <TableCellCentered></TableCellCentered>
              </TableRow>
            </TableHead>
            <TableBody>
              {currencyFavoriteItems.map(
                ({
                  id,
                  codeOut,
                  codeIN,
                  flagOut,
                  symbolOut,
                  unit,
                  valuteOut,
                  valuteIn,
                  flagIn,
                  symbolIn,
                  course,
                }) => (
                  <TableRow key={id}>
                    <TableCellCentered>
                      <Flag
                        code={flagIn}
                        height="16"
                        fallback={<Icon>flag</Icon>}
                      />{' '}
                      {codeIN}
                    </TableCellCentered>
                    <TableCellCentered>
                      {valuteIn}, {symbolIn}
                    </TableCellCentered>
                    <TableCellCentered>{unit}</TableCellCentered>
                    <TableCellCentered>
                      <Flag
                        code={flagOut}
                        height="16"
                        fallback={<Icon>flag</Icon>}
                      />{' '}
                      {codeOut}
                    </TableCellCentered>
                    <TableCellCentered>
                      {valuteOut}, {symbolOut}
                    </TableCellCentered>
                    <TableCellCentered>{course}</TableCellCentered>
                    <TableCellCentered>
                      <Button
                        onClick={() => handleClickDelete({ id })}
                        variant="contained"
                      >
                        Очистить
                      </Button>
                    </TableCellCentered>
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

export default FavoritesCurrenciesList;
