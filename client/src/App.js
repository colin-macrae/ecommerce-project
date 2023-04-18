// import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import MensProducts from './pages/Mens-products';
import Navbar from './components/Navbar';
import WomensProducts from './pages/Womens-products';
import Home from './pages/Home';
import ShoppingCart from './pages/Shopping-cart';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="womensproducts" element={<WomensProducts />} />
        <Route path="mensproducts" element={<MensProducts />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;























// function App() {
//   const [serverData, setServerData] = useState("");

//   useEffect(() => {
//     async function getServerData() {
//       const resp = await fetch('/api/hello');
//       const data = await resp.json();

//       console.log('Data from server:', data);

//       setServerData(data.message);
//     }

//     getServerData();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>{serverData}</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
