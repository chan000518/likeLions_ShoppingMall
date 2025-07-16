import {  useState, useEffect } from 'react';
import { ItemList }  from '../component/ItemList';
import { fetchAllProducts } from '../apis/product';
import { fetchProductByName } from '../apis/product';
import React from 'react';
import Navbar from "../component/layout/Navbar";
import '../index.css';

export const Main = () => {
  const [productsData, setProductsData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    const SearchData = async () => {
      const all = await fetchAllProducts();
      setProductsData(all || []);
      setFilteredData(all || []);
    };
    SearchData();
  },[]);
  
   const handleSearch = () => {
    const filteredData = search ? productsData.filter(item => 
      item.productName.toLowerCase().includes(search.toLowerCase()) ): productsData;
    
    setFilteredData(filteredData);
    };
    const handleReset = () => {
      setSearch("");
      setFilteredData(productsData);
    }

  return (
    <main>
      <Navbar search={search} setSearch={setSearch} onSearch={handleSearch} onReset={handleReset}/>
      <ItemList ItemList={filteredData} />
    </main>
  );
};
