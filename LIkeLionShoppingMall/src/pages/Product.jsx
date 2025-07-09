import { useParams } from "react-router-dom";
import dogData from '../data/dogData.json';
import React, {useState} from "react";
import { Button } from "../component/Button";
import { useQuantity } from "../hooks/useQuantity";
import CartModal from "../component/CartModal";

export const Product = () => {
  const [showModal, setShowModal] =useState(false);
  const {id} = useParams();
  const handleAddToCart =() => {
    // 장바구니 추가 로직
    setShowModal(true);
  }
  const product = dogData.find((item)=> item.id == parseInt(id));
  if (!product) return <div>상품이 존재하지 않습니다.</div>;
  
  const {name, category, price} =product;
  const {quantity, increase, decrease} = useQuantity(1);
  console.log(id);
  return (
    <div className="relative">

    <div className="mt-10 flex items-center justify-center bg-white px-4">
      <div className="max-w-2xl w-full bg-amber-50 p-10 rounded-md flex flex-col md:flex-row gap-10">
    <img
      src="/src/assets/item.png"
      alt={name}
      className="w-72 h-72 object-cover rounded"
      />
    <div className="flex-1">
      <p className="text-sm text-gray-500 mb-1">{category}</p>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg text-gray-700">가격</p>
        <p className="text-xl font-semibold">{price.toLocaleString()}원</p>
      </div>

      <div className="flex justify-between items-center gap-2">
        <p className="text-gray-700 mb-0">구매 수량</p>
        <div className="flex items-center justify-center px-3 py-1 rounded ">
          <button onClick={decrease} className="font-bold text-lg w-6 h-6 flex justify-center items-center">-</button>
          <span className="px-4">{quantity}</span>
          <button onClick={increase} className="font-bold text-lg w-6 h-6 flex justify-center items-center">+</button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-700">총 상품 금액</p>
        <p className="text-xl font-bold text-purple-600">
          {(price*quantity).toLocaleString()}원
        </p>
      </div>
      <div className="flex justify-center">
      <Button onClick={handleAddToCart}>
        장바구니 담기
      </Button>
      </div>
    </div>

  </div>
  </div>
    {showModal && <CartModal onClose={()=>setShowModal(false)} />}
  </div>
  )
};