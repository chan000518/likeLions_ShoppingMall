import {Button} from "./Button"

export const ItemCard = ({ item, onClick }) => {
  const {image, title, Seller, age, ancestry, cute, price } = item;

  const clickHandle = () => {
    alert(title + "가 장바구니에 담겼어요!")
  } 

  return (
    <div className="ph:w-full ph:text-sm dt:w-full dt:text-base bg-gradient-to-r rounded-lg shadow hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
      <div onClick={onClick}>
        <img
          src={image}
          alt={`${title} 커버`}
          className="w-full ph:h-80 dt:h-80 object-cover rounded mb-4"
          onClick={onClick}
        />
        <h2 className="text-2xl font-semibold text-black" >{title}</h2>
        <hr className="my-4 border-gray-600" />
        <p className="text-gray-500">판매자 : {Seller}</p>
        <p className="text-gray-500">나이 : {age}</p>
        <p className="text-gray-500">출신: {ancestry}</p>
        <p className="text-gray-500">귀여움: {cute}</p>
        <p className="text-gray-800 text-sm mt-2">가격: {price}</p>
      </div>
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