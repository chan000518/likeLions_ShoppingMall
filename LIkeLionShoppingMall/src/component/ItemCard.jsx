import {Button} from "./Button"
import { Link } from 'react-router-dom';


export const ItemCard = ({ item }) => {
  const { id, name, category, price } = item;

  const clickHandle = () => {
    alert(name + "가 장바구니에 담겼어요!")
  } 

  return (
    <div className="ph:w-full ph:text-sm dt:w-full dt:text-base bg-gradient-to-r rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <Link to={`/Product/${id}`}>
        <img
          src={"/src/assets/item.png"}
          alt={`${name} 커버`}
          className="w-full h-40 object-contain rounded mb-4"
        />
        <div className="px-4">
          <h2 className="text-2xl font-semibold text-black" >상품명: {name}</h2>
          <p className ="text-gray-700 text-sm">카테고리: {category}</p>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 py-2"> 
        <p className="text-gray-900 text-lg font-bold">{price.toLocaleString()}원</p>
        <Button 
          children={"장바구니 담기"} 
          onClick={clickHandle}
          className="hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
        />
       </div>
      <div className="relative bottom-5 flex justify-end pr-5">
      </div> 
    </div>
  );
};