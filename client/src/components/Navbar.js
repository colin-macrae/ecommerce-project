import { Outlet, Link } from 'react-router-dom';
import './Navbar.css'
import { getCart } from '../pages/Shopping-cart.js'

export default function Navbar() {
  return (
      <>
        <nav className="nav-columns">
          <div className='nav-col-left one-third'>
            <Link to="/mensproducts">Men</Link>
            <Link to="/womensproducts">Women</Link>
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
                CYCLING APPAREL
              </p>
            </Link>
          </div>
          <div className='nav-col-right one-third'>
            <Link to="/shoppingcart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <QuantityBubble />
          </div>
        </nav>
        <Outlet />
      </>
  )
}

// get quantity of items in cart //
const cartItemsArray = getCart();
export function cartQuantity() {
  return cartItemsArray.length;
}
let cartItemsQuantity = cartQuantity()

function QuantityBubble() {
  if (cartItemsQuantity > 0) {
    return (
      <p className='cart-qty'>
        {cartItemsQuantity}
      </p>
    )
} else return
}
