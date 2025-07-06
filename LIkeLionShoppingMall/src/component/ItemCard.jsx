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
          src={"/src/assets/wkdvnddl.jpeg"}
          alt={`${name} 커버`}
          className="w-full ph:h-80 dt:h-80 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-semibold text-black" >{name}</h2>
        <p className ="text-gray-700 text-sm mb-2">{category}</p>
        <p className="text-gray-900 text-lg font-bold mb-4">{price.toLocaleString()}원</p>
        <hr className="my-4 border-gray-600" />
      </Link>
      <div className="relative bottom-5 flex justify-end pr-5">
        <Button 
        children={"장바구니 담기"} 
        onClick={clickHandle}
        className="hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
        />
      </div> 
    </div>
  );
};