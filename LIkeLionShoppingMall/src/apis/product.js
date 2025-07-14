import instance from "./instance";
import ApiError from "./ApiError";

export async function fetchAllProducts(){
 try {
  const res = await instance.get('/products');
  return res.data;
      }
    catch(err) {
      ApiError(err);
    }
}

export async function fetchProductByID(id) {
  try {
    const res = await instance.get(`/products/${id}`);
    return res.data
  }
  catch(err) {
    ApiError(err);
  }
}
export async function fecthProductByName(name) {
  if(!name) return;
  try {
    const res = await instance.get(`/products?name=${encodeURIComponent(name)}`);
    return res.data;
  }
  catch (err) {
    ApiError(err);
  }
}