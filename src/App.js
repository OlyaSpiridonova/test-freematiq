import './App.css';
import Converter from './components/converter/converter';
import { Container, Divider } from '@mui/material';
import CurrenciesList from './components/currencies-list/currencies-list';
import FavoritesCurrencies from './components/favorites-currencies/favorites-currencies';

function App() {
  return (
    <div className="App">
      <Container>
        <FavoritesCurrencies />
        <Divider sx={{ my: 5 }} />
        <Converter />
        <Divider sx={{ my: 5 }} />
        <CurrenciesList />
      </Container>
    </div>
  );
}

export default App;
