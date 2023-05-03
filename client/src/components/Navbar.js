import { Outlet, Link } from 'react-router-dom';
import './Navbar.css'
import { localStorageCart } from '../pages/Shopping-cart.js'

export default function Navbar(){
  if (cartItemsQuantity > 0) {
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
            <Link to="shoppingcart"><img src='./shopping-cart.png' alt='cart icon' /></Link>

            {/* cart items quantity displayed */}
            <p className='cart-qty'>
              {cartItemsQuantity}
            </p>

          </div>

        </nav>
        <Outlet />
      </>
    )
  } else return (
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
          <Link to="shoppingcart"><img src='./shopping-cart.png' alt='cart icon'/></Link>
          {/* Cart items quantity removed */}
        </div>

      </nav>
      <Outlet/>
    </>
  )
}

// get quantity of items in cart //
const cartItemsArray = localStorageCart();
export function cartQuantity() {
  return cartItemsArray.length;
}
let cartItemsQuantity = cartQuantity()
