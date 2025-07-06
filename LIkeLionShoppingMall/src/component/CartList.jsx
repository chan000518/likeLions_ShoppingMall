import { useState, useEffect } from 'react';
import { CartCard } from "./CartCard";
import { Button } from './Button';

export const CartList = ({ Data, onDelete}) => {
  const [selectedItem, setSelectedItem] = useState(null); // 어떤 아이템을 선택했는지

  return (
    <div className="flex p-10 ">
      <div className="flex-1 flex-col justify-items-center ">
        {Data.cartItems.length === 0 ? (
          <p className="text-gray-700 text-sm mb-2">장바구니에 상품이 없습니다.</p>
        ) : (
          Data.cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onDelete={() => onDelete(item.id)}
            />
          )))}
      </div>
      <div className='bg-gray-400 m-8 mt-0 p-4 rounded-lg'>
        <h2 className="text-2xl font-semibold text-black mb-4">장바구니</h2>
        <p className="text-gray-700 text-sm mb-2">총 상품 수: {Data.cartTotalItems}개</p>
        <p className="text-gray-900 text-lg font-bold">
          총 주문 금액: {Data.cartTotalPrice.toLocaleString()}원
        </p>
        <p className="text-gray-900 text-lg font-bold">
          할인 금액: 0원
        </p>
        <p className="text-gray-900 text-lg font-bold">
          배송비: 0원
        </p>
        <p className="text-gray-900 text-lg font-bold">
          최종 결제 금액: {Data.cartTotalPrice.toLocaleString()}원
        </p>
        <Button className='w-full'>
            결제하기
        </Button>
      </div>
    </div>
  );
};
