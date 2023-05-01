import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (

    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Sonic Synergy" />
      <div>
        <h2 className='text-white'>Nuestra tienda de instrumentos musicales</h2>
        <p className='text-white'>Aquí una amplia selección de instrumentos musicales de alta calidad a precios competitivos. ¡Explora nuestras
          categorías y encuentra el instrumento perfecto para ti!</p>
      </div>
      <ProductCard />


    </div>
  );
}

export default App;