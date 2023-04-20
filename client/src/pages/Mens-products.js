import { useEffect, useState } from 'react';
import './MensProducts.css'

export default function MensProducts() {
  const [serverData, setServerData] = useState([]);

    useEffect(() => {
    async function getServerData() {
      const resp = await fetch('/api/products');
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
      <h5>Men's Products</h5>
      <div className="row">
        {serverData?.map((product, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
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
    <>
      {/* TODO: Instead of a div, the above should link to `/details/:productId` */}
       <div className="card-body">
        <img src={url} alt='product'/>
        <h5 className="card-title">{name} {type}</h5>
        {/* <h5 className="card-title">{type}</h5> */}
        {/* <h5 className="card-title">{description}</h5> */}
        <h5 className="card-title">{color}</h5>
        <h5 className="card-title">${price}</h5>
      </div>
    </>
  );
}
