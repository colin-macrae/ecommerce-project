import { Outlet, Link } from 'react-router-dom';
import './Navbar.css'


export default function Navbar(){
  return (
    <>
      <nav className="navbar nav-columns">
        <div className='nav-col-left one-third'>
          <Link to="/mensproducts">Shop Men</Link>
          <Link to="/womensproducts">Shop Women</Link>
        </div>
        <div className='nav-col-center one-third'>
          <Link to="/">
            <p>
              Pinocelli
            </p>
            <p>
              Studios
            </p>
            <p className='premium-cycling-wear'>
              PREMIUM CYCLING WEAR
            </p>
          </Link>
        </div>
        <div className='nav-col-right one-third'>
          <Link to="shoppingcart">Cart</Link>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}
