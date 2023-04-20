import { useEffect, useState } from 'react';
import './MensProducts.css'

export default function MensProducts() {
  const [serverData, setServerData] = useState([]);

    useEffect(() => {
    async function getServerData() {
      const resp = await fetch('/api/mensproducts');
      const data = await resp.json();

      console.log('data:', data);

      setServerData(data);
    }

    getServerData();
  }, []);

  // console.log('serverData', serverData)
  // const itemType = serverData.map(item => <li>{item.price}</li>)
  // const itemType = serverData.map((item, index) =>
  // <div>
  //   <li key={index}>{item.price}</li>
  //   <li key={index}>{item.type}</li>
  // </div>
  // )
  // const description = serverData.map((item, index) => <li key={index}>{item.description}</li>)

  return (
    // <>
    //   <p>men's</p>
    //   <ul>{itemType}</ul>
    //   {/* <ul>{description}</ul> */}
    // </>
    <div className="container">
      {/* <h5>Men's Products</h5> */}
      <div className='product-page-copy-container'>
        <h3 className='product-page-copy-header'>Men's Cycling Jerseys</h3>
        <p className='product-page-copy-text'>
          The Men’s Jerseys are all laser-cut and assembled by hand at one of our premium manufacturing facilities across Europe. All jerseys are given a shortened front panel and an extended back panel to eliminate the bulking of excessive fabric around the torso to suit your optimal riding position.</p>
      </div>
      <div className="row">
        {serverData?.map((product, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Product({ product }) {
  const { name, url, type, description, details, price, color } = product;
  return (
    <div className='row'>
      {/* TODO: Instead of a div, the above should link to `/details/:productId` */}
       <div className="card-body">
        <img src={url} alt='product'/>
        <p className="card-title">{name}</p>
        {/* <h5 className="card-title">{type}</h5> */}
        {/* <h5 className="card-title">{description}</h5> */}
        <p className="card-title">{color}</p>
        <p className="card-title">${price}</p>
      </div>
    </div>
  );
}
