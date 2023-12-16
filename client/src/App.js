import './App.css';
import { Routes, Route } from "react-router-dom";
import MensProducts from './pages/Mens-products';
import Navbar from './components/Navbar';
import WomensProducts from './pages/Womens-products';
import Home from './pages/Home';
import ShoppingCart from './pages/Shopping-cart';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import { useState } from 'react';
import { getCart } from './pages/Shopping-cart';

function App() {
  const [ currentCart, setCurrentCart ] = useState(getCart())
  return (
    <div className='container outer-container'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/womensproducts" element={<WomensProducts />} />
        <Route path="/mensproducts" element={<MensProducts />} />
        <Route path="/shoppingcart" element={<ShoppingCart
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}

          />}/>
        <Route path="/productdetails/:productId" element={<ProductDetails
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}

        />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
