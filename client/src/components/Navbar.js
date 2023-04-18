import { Outlet, Link } from 'react-router-dom';


export default function Navbar(){
  return (
    <>
      <nav className="navbar">
        <Link to="/mensproducts">Shop Men</Link>
        <Link to="/womensproducts">Shop Women</Link>
        <Link to="/">Pinocelli</Link>
        <Link to="shoppingcart">Cart</Link>
      </nav>
      <Outlet/>
    </>
  )
}
