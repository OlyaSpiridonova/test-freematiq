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

function FavoritesCurrenciesList() {
  const defaultPairs = [
    {
      codeOut: 'RUB',
      valuteOut: 'Рубль РФ',
      unit: '1',
      codeIN: 'USD',
      valuteIn: 'Доллар США',
      course: '70.5',
    },
    {
      codeOut: 'RUB',
      valuteOut: 'Рубль РФ',
      unit: '1',
      codeIN: 'EUR',
      valuteIn: 'Евро ЕС',
      course: '80.5',
    },
  ];
  return (
    <>
      <Grid item xs={12} md={12} mt={5}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Буквенный код</TableCell>
                <TableCell>Валюта</TableCell>
                <TableCell>Единиц</TableCell>
                <TableCell>Буквенный код</TableCell>
                <TableCell>Валюта</TableCell>
                <TableCell>Курс</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {defaultPairs.map(
                ({ codeOut, codeIN, unit, valuteOut, valuteIn, course }) => (
                  <TableRow key={codeIN}>
                    <TableCell>{codeIN}</TableCell>
                    <TableCell>{valuteIn}</TableCell>
                    <TableCell>{unit}</TableCell>
                    <TableCell>{codeOut}</TableCell>
                    <TableCell>{valuteOut}</TableCell>
                    <TableCell>{course}</TableCell>
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
