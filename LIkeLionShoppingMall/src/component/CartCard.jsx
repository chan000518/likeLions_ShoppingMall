import { Button } from './Button';
import { Link } from 'react-router-dom';

export const CartCard = ({ item, onDelete }) => {
  const { id, name, category, price, quantity, totalPrice } = item;

  return (
    <div className="flex flex-col md:flex-row bg-gray-200 mb-4 px-4 justify-between items-center w-full ph:text-sm dt:text-base bg-gradient-to-r rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <Link to={`/Product/${id}`}>
        <img
          src={'/assets/item.png'}
          alt={`${name} 커버`}
          className="h-40 object-contain rounded"
        />
      </Link>
      <div className="flex flex-col w-full lg:flex-row  items-center justify-around">
        <div>
          <h2 className="text-2xl font-semibold text-black">상품명: {name}</h2>
          <p className="text-gray-700 text-sm mb-2">카테고리: {category}</p>
        </div>
        <div>
          <p className="text-gray-900 text-lg font-bold">
            가격: {price.toLocaleString()}원
          </p>
          <p className="text-gray-900 text-lg font-bold">수량: {quantity}</p>
        </div>
        <p className="text-gray-900 text-lg font-bold">
          총 가격: {totalPrice.toLocaleString()}원
        </p>
      </div>
      <Button className="text-center" onClick={onDelete}>
        x
      </Button>
    </div>
  );
};
