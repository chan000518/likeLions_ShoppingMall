import {Button} from "./Button"
import { Link } from 'react-router-dom';


export const CartCard = ({ item, onDelete }) => {
  const { id, name, category, price, quantity, totalPrice } = item;

  return (
    <div className="flex bg-gray-200 mb-4 pr-4 justify-between items-center w-full ph:text-sm dt:text-base bg-gradient-to-r rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <Link to={`/Product/${id}`}>
        <img
          src={"/src/assets/wkdvnddl.jpeg"}
          alt={`${name} 커버`}
          className="h-40 object-cover rounded"
        />
      </Link>
      <div>
        <h2 className="text-2xl font-semibold text-black" >{name}</h2>
        <p className ="text-gray-700 text-sm mb-2">{category}</p>
        <p className="text-gray-900 text-lg font-bold">{price.toLocaleString()}원</p>
      </div>
      <div>
        <p className="text-gray-900 text-lg font-bold">수량: {quantity}</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="text-gray-900 text-lg font-bold">총 가격: {totalPrice.toLocaleString()}원</p>
      </div>
      <Button className="text-center" onClick={onDelete}>
        x
      </Button>
    </div>
  );
};  