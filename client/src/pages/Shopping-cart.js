import './Shopping-cart.css'
import { removeFromCart } from './ProductDetails';

export default function ShoppingCart() {
  if (items) {
    return (
      <div className="container prod-details-container cart-items-container">
        <h1 className='cart-header'>Cart</h1>

        <CartItems />

        <div className='order-tally'>
          <div>
            <div className='order-lineitem'>
              <p>Subtotal</p>
              <p className='dollar-amt'>${amount}</p>
            </div>
            <div className='order-lineitem'>
              <p>Delivery</p>
              <p className='dollar-amt'>FREE</p>
            </div>
            <div className='checkout-btn-container'>
              <button className='checkout-btn'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>

      </div>
    )
  } else return <h1 className='cart-header'>Your cart is empty</h1>

}

const items = JSON.parse(localStorage.getItem('cart'));
console.log(items)

function subtotal() {
  let sum = 0;
  if (items) {
    for (let i = 0; i < items.length; i++) {
      sum += Number(items[i].price)
    }
    return sum;
  } else return
}
const amount = subtotal()

function CartItems() {
   const cartItem = items.map(x =>
    <div key={x.productId} className = "row" >
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
               href='http://localhost:3000/'
            onClick={removeFromCart}
            >
              Remove All Items
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
