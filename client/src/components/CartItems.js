import '../pages/Shopping-cart.js'
import { removeFromCart } from '../pages/Shopping-cart.js'
import { useState, useEffect } from 'react'
import { getCart } from '../pages/Shopping-cart.js';

export default function CartItems() {
const [currentCart, setCurrentCart] = useState(getCart());

  useEffect(() => {
    function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
      if (cart === null) {
        return []
      } else {
        return setCurrentCart(cart);
      }
    }
    getCart()
  }, []);

  const cartItem = currentCart.map(x =>
    <div key={x.productId} className="row cart-item-container" >
      <div className="col-6 col-md-6 col-lg-6 img-container">
        <img src={x.url} alt='jersey' className="cart-image" />
      </div>
      <div className="col-6 col-md-6 col-lg-6 cart-item-text">
        <div>
          <div className='name-and-price'>
            <p>{x.name}</p>
            <p className='dollar-amt'>${x.price}</p>
          </div>
          <p className='product-color'>{x.color}</p>
          <div className='remove-button-div'>
            <button
              onClick={() => removeFromCart(x.productId)}
            >
              (-) Remove Item
            </button>
          </div>
        </div>
      </div>
    </div >
  )
  return (
    <div>
      {cartItem}
    </div>
  )
}
