import instance from "./instance";
import ApiError from "./ApiError";


export async function fetchCart() {
  try {
    const res = await instance.get("./cart");
    return res.data;
  }
  catch (err) {
    ApiError(err);
  }
}
export async function fetchAddToCart({product_id, quantity}) {
  try {
    const res = await instance.post("/cart",{
      product_id,
      quantity,
    });
    return res.data;
  } catch(err) {
      ApiError(err);
  }
}
export async function fetchRemoveCartItem(product_id) {
  try{
    const res = await instance.delete(`/cart/${product_id}`);
    return res.data;
  }
  catch(err){
    ApiError(err);
  }
}