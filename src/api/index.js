import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export function saveToken(token) {
  axios.defaults.headers.common["Authorization"] = token;
}

/**
 *
 * USER REQUESTS
 *
 */
// credentials = {"email": "...", "password" : "..."}
export const login = async (credentials) =>
  await axios.post("/auth", credentials);

// userData = {
//   "email": 'greta.thunberg@example.se',
//   "password": 'grillkorv123',
//   "name": 'Johan Kivi',
//   "address": {
//     "street": 'Tokitokvägen 3',
//     "zip": '123 45',
//     "city": 'Tokberga'
//   }
// }
export const registerUser = async (userData) =>
  await axios.post("/register/", userData);

export const getUserInfo = async () => await axios.get("/me");

export const updateProfile = async (userData) =>
  await axios.patch("/me", userData);

export const getAllProducts = async (category, page, pageSize) =>
  await axios.get(
    `/items?category=${category}&page=${page}&pageSize=${pageSize}`
    // `/items?category=tshirt&page=1&pageSize=3`
  );

// export const getAllProducts = async (category, page, pageSize) =>
//   await axios.get(`/items?category=${category}&page=${page}&pageSize=${pageSize}`, null, {
//     params: { category, page, pageSize },
//   });

export const getSingleProduct = async (productId) =>
  await axios.get(`/items/${productId}`);

// productData = {
//   "title": 'Gretas Fury',
//   "price": 999,
//   "specialEdition": true,
//   "shortDesc": 'Unisex',
//   "longDesc": 'Skate ipsum dolor sit amet...',
//   "imgFile": 'skateboard-greta.png'
// }
export const addProduct = async (productData) =>
  await axios.post("/items/", productData);

export const updateProduct = async (productId, productData) =>
  await axios.patch(`/items/${productId}`, productData);

export const deleteProduct = async (productId) =>
  await axios.delete(`/items/${productId}`);

// response will be according to user status
// admin -> get all orders
// user -> get all his/her orders
export const getAllOrders = async () => await axios.get("/orders");

export const getSingleOrder = async (orderId) =>
  await axios.get(`/orders/${orderId}`);

// orderData = {
//   "title": 'Gretas Fury',
//   "price": 999,
//   "specialEdition": true,
//   "shortDesc": 'Unisex',
//   "longDesc": 'Skate ipsum dolor sit amet...',
//   "imgFile": 'skateboard-greta.png'
// }
export const createNewOrder = async (orderData) =>
  await axios.post("/orders", orderData);

// orderStatus = {status: ...}
export const updateOrderStatus = async (orderId, orderStatus) =>
  await axios.patch(`/orders/${orderId}`, orderStatus);

export const getAllImages = async () => await axios.get("/images");

export const addImage = async (image) => await axios.post("/images", image);
