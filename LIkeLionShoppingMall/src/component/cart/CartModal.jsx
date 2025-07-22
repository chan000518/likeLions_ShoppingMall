import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

export default function CartModal({ onClose }) {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sms z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
        >
          x
        </button>
        <div className="flex flex-col items-center gap-4">
          <span className="text-3xl text-purple-600">🛒</span>
          <p className="text-center text-gray-800">
            장바구니에 추가되었습니다.
          </p>

          <div className="flex justify-between w-full mt-4">
            <button
              onClick={onClose}
              className="bg-white cursor-pointer text-amber-500 py-2 px-4 rounded-md"
            >
              쇼핑 계속하기
            </button>
            <Button onClick={() => navigate('/cart')}>장바구니 보기</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
