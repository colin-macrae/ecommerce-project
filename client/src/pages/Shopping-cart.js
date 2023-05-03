import './Shopping-cart.css'
import CartItems from '../components/CartItems.js';
// import cartQuantity from '../components/Navbar.js';
// console.log(cartQuantity())

export default function ShoppingCart() {
  if (cartItemsQuantity > 0) {
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
  } else {
    return (
      <div className="container prod-details-container cart-items-container">
        <h1 className='cart-header'>Cart</h1>

        <p className='empty-cart'>There are currently no items in your cart</p>

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

// const numberItems = localStorageCart()
// const qty = numberItems.length

// grab all items from local storage //
export function localStorageCart() {
  const items = JSON.parse(localStorage.getItem('cart'));
  return items
}
const items = localStorageCart();
const cartItemsQuantity = items.length

// total all items in cart //
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

// cart manipulation functions //
export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === null) {
    return [];
  } else return cart
}

export function addToCart(product) {
  const cart = getCart()
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart))
  window.location.reload()
}

export function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  const newCart = cart.filter((item) => item.productId !== productId)
  localStorage.setItem('cart', JSON.stringify(newCart))
  window.location.reload()
}
