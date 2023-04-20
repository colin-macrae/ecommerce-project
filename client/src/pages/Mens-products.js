import { useEffect, useState } from 'react';

export default function MensProducts() {
  const [serverData, setServerData] = useState("");

    useEffect(() => {
    async function getServerData() {
      const resp = await fetch('/api/products');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data);
    }

    getServerData();
  }, []);

  // const itemType = serverData.map(item => <li>{item.price}</li>)

  return (
    <>
      <p>men's</p>
      {/* <ul>{itemType}</ul> */}
    </>
  )
}
