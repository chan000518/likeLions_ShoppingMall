import instance from './instance';
import ApiError from './ApiError';

export async function fetchAllProducts() {
  try {
    const res = await instance.get('/products/list');
    return res.data;
  } catch (err) {
    ApiError(err);
  }
}
// {
// "product”:
//   [
//     {”id” : BIGINT,
//      “name”: String,
//      “price”: int}
//   ]
// }

export async function fetchProductByID(id) {
  try {
    const res = await instance.get(`/products/${id}`);
    return res.data;
  } catch (err) {
    ApiError(err);
  }
}
// {
// ”id” : BIGINT,
// “name”: String,
// “price”: int,
// “infor”:string
// }

export async function fetchProductByName(name) {
  if (!name) return;
  try {
    const res = await instance.get(
      `/products/list/?name=${encodeURIComponent(name)}`
    );
    return res.data;
  } catch (err) {
    ApiError(err);
  }
}
// {“product” : [
// {
// “name”: String,
// “price”: int
// }
// ]}
