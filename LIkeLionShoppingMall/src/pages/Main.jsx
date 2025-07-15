import { useEffect, useState } from 'react';
import { ItemList } from '../component/ItemList';
import { fetchAllProducts } from '../apis/product';
import dogData from '../data/dogData.json';
import '../index.css';

export const Main = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products  = await fetchAllProducts();
      console.log(products);
      setProductsData(products);
    };
    fetchData();
  }, []);

  return (
    <main>
      <ItemList ItemList={productsData} />
    </main>
  );
};
