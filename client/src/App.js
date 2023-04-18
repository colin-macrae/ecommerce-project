// import { useEffect, useState } from 'react';
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
    <div className='container'>
      <Navbar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/womensproducts" element={<WomensProducts />} />
        <Route path="/mensproducts" element={<MensProducts />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
}

export default App;



// //////////////////////////// the code below is for use/examples for later issues
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
