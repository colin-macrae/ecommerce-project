import '../pages/Shopping-cart.js'
import { removeFromCart } from '../pages/Shopping-cart.js'
import { useState, useEffect } from 'react'
import { getCart } from '../pages/Shopping-cart.js';

export default function CartItems() {
const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    setCurrentCart(getCart())
  }, []);

  const cartItem = currentCart.map(item =>
    <div key={item.productId} className="row cart-item-container" >
      <div className="col-6 col-md-6 col-lg-6 img-container">
        <img src={item.url} alt='jersey' className="cart-image" />
      </div>
      <div className="col-6 col-md-6 col-lg-6 cart-item-text">
        <div>
          <div className='name-and-price'>
            <p>{item.name}</p>
            <p className='dollar-amt'>${item.price}</p>
          </div>
          <p className='product-color'>{item.color}</p>
          <div className='remove-button-div'>
            <button
              onClick={() => removeFromCart(item.productId)}
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
