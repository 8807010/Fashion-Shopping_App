import Arrivals from './components/arrivals/Arrivals.jsx';
import Brands from './components/brands/Brands.jsx';
import Header from './components/header/Header.jsx';
import Payday from './components/payday/Payday.jsx';
import Promo from './components/promo/Promo.jsx';
import Favourite from './components/favourite/Favourite.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
    </div>
  );
}

export default App;
