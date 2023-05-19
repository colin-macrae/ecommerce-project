import './Shopping-cart.css'
import CartItems from '../components/CartItems.js';

export default function ShoppingCart() {
  if (cartItemsQuantity > 0) {
    return (
      <div className="container  cart-items-container">
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
              <button onClick={noCheckoutAvailable} className='checkout-btn'>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container  cart-items-container">
        <h1 className='cart-header'>Cart</h1>

        <p className='empty-cart'>Your cart is empty</p>

        <div className='order-tally'>
          <div>
            <div className='order-lineitem'>
              <p>Subtotal</p>
              <p className='dollar-amt'>${amount}</p>
            </div>
            <div className='order-lineitem'>
              <p>Delivery</p>
              <p className='dollar-amt'>N/A</p>
            </div>
            <div className='checkout-btn-container'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// cart manipulation functions //
export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === null) {
    return [];
  } else return cart
}

const items = getCart();
const cartItemsQuantity = items.length

export function addToCart(product) {
  const cart = items
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart))
  window.location.reload()
}

export function removeFromCart(productId) {
  let cart = items
  const newCart = cart.filter((item) => item.productId !== productId)
  localStorage.setItem('cart', JSON.stringify(newCart))
  window.location.reload()
}

// total all item prices in cart //
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

// cart button alert
function noCheckoutAvailable() {
  return alert('Checkout is not available.')
}
