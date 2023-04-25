import './Shopping-cart.css'

export default function ShoppingCart() {
  return (
    <div className="container prod-details-container cart-items-container">
      <h1 className='cart-header'>Cart</h1>

      <CartItems/>

      <div className='order-tally'>
        <div>
          <div className='order-lineitem'>
            <p>Subtotal</p>
            <p className='dollar-amt'>$130</p>
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
}


function CartItems() {
  return (
    <div className="row">
      <div className="col-6 col-md-6 col-lg-6">
        <img src='https://assets.pasnormalstudios.com/391/conversions/Man_Essential-Jerswey_Earth_4-5-pdp-page.jpg?v=1668716956' alt='jersey' className="cart-image" />
      </div>
      <div className="col-6 col-md-6 col-lg-6 cart-item-text">
        <div>
          <div className='name-and-price'>
            <p>Jersey</p>
            <p className='dollar-amt'>$155.00</p>
          </div>
          <p>Green</p>
          <div className='remove-button-div'>
            <a href='#'>Remove Item</a>
          </div>
        </div>
      </div>
    </div>
  )
}
