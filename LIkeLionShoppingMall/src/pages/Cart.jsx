import { CartList } from "../component/CartList"
import cartData from "../data/cartData.json"
import { useState } from "react";

export const Cart = () => {
  const [CartData, setCartData] = useState(cartData);
  
  const DeleteHandler = (id) => {
    const updatedCartItems = CartData.cartItems.filter(item => item.id !== id);
    const updatedCartTotalItems = updatedCartItems.length;
    const updatedCartTotalPrice = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    setCartData({
      ...CartData,
      cartItems: updatedCartItems,
      cartTotalItems: updatedCartTotalItems,
      cartTotalPrice: updatedCartTotalPrice
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">장바구니</h1>
      <CartList Data={CartData} onDelete={DeleteHandler} />
    </div>
  );
};