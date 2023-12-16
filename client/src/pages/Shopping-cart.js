import './Shopping-cart.css'
import CartItems from '../components/CartItems.js';
import '../components/Modal.css';
import { useState } from 'react';


export default function ShoppingCart({ currentCart, setCurrentCart }) {
  const [showModal, setShowModal] = useState(false);
  const modalText = "Delete all items from cart?"

  const cartItemsQty = getCart().length

  if (cartItemsQty > 0) {
    return (
      <div className="container cart-items-container">
        <h1 className='cart-header'>
          Cart
          <button
            className='clear-cart-btn'
            onClick={() => setShowModal(true)}
            >
            Clear Cart
          </button>
        </h1>
        <CartItems
        />
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
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalText={modalText}
          currentCart={currentCart}
          setCurrentCart={setCurrentCart}
        />
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

// Modal
export function Modal({ showModal, setShowModal, modalText, currentCart, setCurrentCart }) {
  return (
    <div
      className={
        showModal ?
          'modal' :
          'hide'
      }
    >
      <div className='modal-box'>
        <div className='modal-text'>
          {modalText}
        </div>
        <div className='modal-btn-container'>
          <button
            className='modal-btn modal-cancel-btn'
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className='modal-btn modal-delete-btn'
            onClick={() => {
              setShowModal(false);
              clearCart({ currentCart, setCurrentCart });
            }}
          >
            Clear Cart
          </button>


        </div>
      </div>
    </div>
  )
}


// cart manipulation functions //
export function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  if (cart === null) {
    return [];
  } else return cart
}

export function addToCart(product) {
  const cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === product.productId) {
      return
    }
    console.log(cart)
  }
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart))
  window.location.reload()
}

export function removeFromCart(productId) {
  const cart = getCart();
  const newCart = cart.filter((item) => item.productId !== productId)
  localStorage.setItem('cart', JSON.stringify(newCart))
  window.location.reload()
}

export function clearCart ({currentCart, setCurrentCart}) {
  localStorage.setItem('cart', JSON.stringify([]))
  const cart = getCart();
  setCurrentCart(cart);
  console.log(cart, currentCart)
}

// total all item prices in cart //
function subtotal() {
  const cart = getCart();
  let sum = 0;
  if (cart) {
    for (let i = 0; i < cart.length; i++) {
      sum += Number(cart[i].price)
    }
    return sum;
  } else return
}
const amount = subtotal()

// cart button alert //
function noCheckoutAvailable() {
  return alert('Checkout is not available.')
}
