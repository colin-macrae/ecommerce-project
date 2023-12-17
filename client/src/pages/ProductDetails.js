import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import { addToCart } from './Shopping-cart.js'
import { getCart } from './Shopping-cart.js';
import Modal from '../components/Modal';

export default function ProductDetails({currentCart, setCurrentCart}) {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadProduct(productId) {
      try {
        setIsLoading(true);
        const product = await fetchProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProduct(productId);
  }, [productId]);

  if (isLoading) return <div className='loading-or-error'>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}: {error.message}
      </div>
    );
  }
  if (!product) return null;
  const { name, url, description, color, details, price } = product;

  function checkQty () {
    const cart = getCart()
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].productId === product.productId) {
        setShowModal(true);
        return;
      }
    }
  }

  const modalText = "Only one of each item may be added to cart"

  let added = false;
  if (getCart()) {
    const checkAdded = getCart().some((prod) => prod.productId === Number(productId));
    added = checkAdded;
  }

  return (
    <div className="container prod-details-container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <img src={url} alt={name} className="image" />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div className='text-content-container'>
            <h5>{name}</h5>
            <p className='details-color'>{color}</p>
            <p className='details-price'>${price}</p>
            <p>{description}</p>
            <h5 className='details-header'>Details</h5>
            <p>{details}</p>
            <div className='button-div'>
              <button
                className={added ? "btn btn-added" : "btn"}
                onClick={() => {
                  checkQty();
                  addToCart({product: product, currentCart, setCurrentCart})
                }}
              >
                {added ? "ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalText={modalText}
      />
    </div>
  );
}

async function fetchProduct(productId) {
  const res = await fetch((`/api/products/${productId}`));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
