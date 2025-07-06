import { useParams } from "react-router-dom";

export const Product = () => {
  const {id} = useParams();
  console.log(id);
  return (
  <div>
    <h1 className="text-3xl font-bold mb-4">상품 상세 페이지</h1>
    <p>선택한 상품 ID: {id}</p>
  </div>);
};