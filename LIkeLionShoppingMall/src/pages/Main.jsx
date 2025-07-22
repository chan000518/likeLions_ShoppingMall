import {  useState, useEffect } from 'react';
import { ItemList }  from '../component/item/ItemList';
import { fetchAllProducts } from '../apis/product';
import { fetchProductByName } from '../apis/product';
import { LoginModal } from '../component/modal/LoginModal';
import React from 'react';
import Navbar from "../component/layout/Navbar";
import '../index.css';
import CartModal from '../component/cart/CartModal';

export const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
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
      <ItemList ItemList={filteredData} setShowModal = {setShowModal} setLoginModal={setLoginModal} />
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
      {/* 로그인 모달 띄우기 */}
      {loginModal && <LoginModal onClose={()=>setLoginModal(false)}/>}
    </main>
  );
};
