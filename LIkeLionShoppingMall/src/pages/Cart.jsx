import { CartList } from '../component/cart/CartList';
import cartData from '../data/cartData.json';
import { fetchCart, fetchRemoveCartItem } from '../apis/cart';
import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';
import { useEffect } from 'react';

export const Cart = () => {
  const [data, setCartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCart();
      console.log(data);
      setCartData(data);
    };
    fetchData();
  }, []);
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ['cart'],
  //   queryFn: fetchCart,
  //   staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  //   cacheTime: 1000 * 60 * 10, // 10분 동안 캐시 유지
  // });

  // 삭제
  const DeleteHandler = async (id) => {
    await fetchRemoveCartItem(id);
    const updatedCartItems = data.cartItems?.filter((item) => item.id !== id);
    const updatedCartTotalItems = updatedCartItems?.length;
    const updatedCartTotalPrice = updatedCartItems?.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    setCartData({
      ...data,
      cartItems: updatedCartItems,
      cartTotalItems: updatedCartTotalItems,
      cartTotalPrice: updatedCartTotalPrice,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold my-4 text-center">장바구니</h1>
      <CartList Data={data} onDelete={DeleteHandler} />
    </div>
  );
};
