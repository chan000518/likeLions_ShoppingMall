import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from '../component/Button';
import { useQuantity } from '../hooks/useQuantity';
import CartModal from '../component/CartModal';
import { fetchAddToCart } from '../apis/cart';
import { fetchProductByID } from '../apis/product'; 

export const Product = () => {
  const [showModal, setShowModal] = useState(false);
  const { productId } = useParams(); // 
  const [product, setProduct] = useState(null);
  const { quantity, increase, decrease } = useQuantity(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductByID(productId);
        setProduct(data);
      } catch (err) {
        console.error('상품 정보를 불러오지 못했습니다:', err);
      }
    };
    loadProduct();
  }, [productId]);

  if (!product) return <div>상품 정보 불러오는 중입니다...</div>;

  const { productName, category, price } = product;

  const handleAddToCart = async () => {
    try {
      await fetchAddToCart({ productId: product.productId, quantity: quantity }); 
      setShowModal(true);
    } catch (error) {
      console.error('장바구니에 추가하는 데 실패했습니다:', error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="flex items-center justify-center bg-white px-4">
        <div className="max-w-2xl w-full bg-amber-50 p-10 rounded-md flex flex-col md:flex-row gap-10">
          <img
            src="/src/assets/item.png"
            alt={productName}
            className="w-72 h-72 object-cover rounded"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">{category}</p>
            <h1 className="text-3xl font-bold mb-4">{productName}</h1>
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg text-gray-700">가격</p>
              <p className="text-xl font-semibold">{price.toLocaleString()}원</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-700 mb-0">구매 수량</p>
              <div className="flex items-center justify-center px-3 py-1 rounded ">
                <button onClick={decrease} className="font-bold text-lg w-6 h-6">-</button>
                <span className="px-4">{quantity}</span>
                <button onClick={increase} className="font-bold text-lg w-6 h-6">+</button>
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-700">총 상품 금액</p>
              <p className="text-xl font-bold text-purple-600">
                {(price * quantity).toLocaleString()}원
              </p>
            </div>
            <div className="flex justify-center">
              <Button onClick={handleAddToCart}>장바구니 담기</Button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </div>
  );
};