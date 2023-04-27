import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'
import { addToCart } from './Shopping-cart.js'

async function fetchProduct(productId) {
  const res = await fetch((`/api/products/${productId}`));
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadProduct(productId) {
      try {
        const product = await fetchProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadProduct(productId);
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Product {productId}: {error.message}
      </div>
    );
  }
  if (!product) return null;
  const { name, url, description, color } = product;

  return (
    <div className="container prod-details-container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6">
          <img src={url} alt={name} className="image" />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <div>
            <h5>{name}</h5>
            <p>{color}</p>
            <p>{description}</p>
            <ul>
              <li>Relaxed fit</li>
              <li>High wicking and quick drying fabrics</li>
              <li>Fully-dyed fabric</li>
              <li>Guarded zip ends</li>
              <li>Zippered side pocket with protected insert</li>
              <li>Robust YKK zipper with semi auto-lock puller</li>
              <li>Fabric: 86% Polyester, 14% Elastane</li>
            </ul>
            <div className='button-div'>
              <a
                href='http://localhost:3000/shoppingcart'
                onClick={() => addToCart(product)}
                >
                ADD TO CART
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//  to be moved ///////////////////////
// create cart file
// function for get cart contents
// function for add , and another for remove
