import { Button } from './Button';
import { Link } from 'react-router-dom';
import { fetchAddToCart } from '../apis/cart';

export const ItemCard = ({ item, setShowModal }) => {
  const { productId, productName, category, price } = item;
  

  const handleAddToCart = async () => {
      try {
        await fetchAddToCart({ productId: productId, quantity: 1 }); 
        setShowModal(true);
      } catch (error) {
        console.error('장바구니에 추가하는 데 실패했습니다:', error);
      }
    };

  return (
    <div className="ph:w-full ph:text-sm dt:w-full dt:text-base bg-gradient-to-r rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <Link to={`/Product/${item.productId}`}>
        <img
          src={'/assets/item.png'}
          alt={`${ productName} 커버`}
          className="w-full h-40 object-contain rounded mb-4"
        />
        <div className="px-4">
          <h2 className="text-2xl font-semibold text-black">상품명: { productName}</h2>
          <p className="text-gray-700 text-sm">카테고리: {category}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 py-2">
        <p className="text-gray-900 text-lg font-bold">
          {price.toLocaleString()}원
        </p>
        <Button
          children={'장바구니 담기'}
          onClick={handleAddToCart}
          className="hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
        />
      </div>
      <div className="relative bottom-5 flex justify-end pr-5"></div>
    </div>
  );
};
