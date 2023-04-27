import '../pages/Shopping-cart.js'
import { removeFromCart, localStorageCart } from '../pages/Shopping-cart.js'

const items = localStorageCart();



export default function CartItems() {
  const cartItem = items.map(x =>
    <div key={x.productId} className="row cart-item-container" >
      <div className="col-6 col-md-6 col-lg-6">
        <img src={x.url} alt='jersey' className="cart-image" />
      </div>
      <div className="col-6 col-md-6 col-lg-6 cart-item-text">
        <div>
          <div className='name-and-price'>
            <p>{x.name}</p>
            <p className='dollar-amt'>${x.price}</p>
          </div>
          <p>{x.color}</p>
          <div className='remove-button-div'>
            <a
              href='http://localhost:3000/shoppingcart'
              onClick={() => removeFromCart(x.productId)}
            >
              (-) Remove Item
            </a>
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


// export function cartItemQuantity() {
//   return items.length;
// }
// let crtQty = cartItemQuantity()
// console.log(crtQty);
