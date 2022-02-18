const products = [
  {
    id: 1,
    title: "Eriks Fury",
    price: 999,
    specialEdition: true,
    shortDesc: "Unisex",
    longDesc: "Skate ipsum dolor sit amet...",
    imgFile: "skateboard-greta.jpg",
  },
  {
    id: 2,
    title: "Amjads Fury",
    price: 999,
    specialEdition: true,
    shortDesc: "Male",
    longDesc: "Skate ipsum dolor sit amet...",
    imgFile: "skateboard-greta.png",
  },
  {
    id: 3,
    title: "Alexandru Fury",
    price: 999,
    specialEdition: true,
    shortDesc: "Unisex",
    longDesc: "Skate ipsum dolor sit amet...",
    imgFile: "skateboard-greta.jpg",
  },
  {
    id: 4,
    title: "Ashod Fury",
    price: 999,
    specialEdition: true,
    shortDesc: "Male",
    longDesc: "Skate ipsum dolor sit amet...",
    imgFile: "skateboard-greta.png",
  },
  {
    id: 5,
    title: "Khaled Fury",
    price: 999,
    specialEdition: true,
    shortDesc: "Female",
    longDesc: "Skate ipsum dolor sit amet...",
    imgFile: "skateboard-greta.png",
  },
];
const users = [
  {
    id: 1,
    admin: true,
    name: "Doe John",
    email: "Doe.John@gmail.com",
    password: "grillkorv",
  },
  {
    id: 2,
    admin: true,
    name: "Jenny",
    email: "Jenny.oliver@gmail.com",
    password: "grillkorv",
  },
  {
    id: 3,
    admin: false,
    name: "Jack",
    email: "jack.jackson@live.se",
    password: "grillkorv",
  },
  {
    id: 4,
    admin: false,
    name: "Per",
    email: "per.person@live.se",
    password: "grillkorv",
  },
  {
    id: 5,
    admin: false,
    name: "johan",
    email: "johan.se@live.se",
    password: "grillkorv",
  },
];
const orders = [
  {
    id: 123,
    userId: 3,
    createdAt: "2022-02-16 13:13:28.138 +00:00",
    updatedAt: "2022-02-16 13:13:28.138 +00:00",
    status: "inProcess",
    items: [
      { id: 5, qty: 4, price: 50 },
      { id: 1, qty: 1, price: 899 },
      { id: 2, qty: 2, price: 500 },
    ],
  },
  {
    userId: 5,
    id: 13,
    createdAt: "2021-02-16 13:13:28.138 +00:00",
    updatedAt: null,
    status: "shipped",
    items: [
      { id: 5, qty: 4, price: 50 },
      { id: 1, qty: 1, price: 899 },
      { id: 2, qty: 2, price: 500 },
    ],
  },
  {
    userId: 4,
    id: 15,
    createdAt: "2021-02-16 13:13:28.138 +00:00",
    updatedAt: "2021-02-17 13:13:28.138 +00:00",
    status: "canceled",
    items: [
      { id: 10, qty: 2, price: 50 },
      { id: 8, qty: 1, price: 899 },
      { id: 13, qty: 1, price: 500 },
    ],
  },
];
export function getAllProducts() {
  return products;
}

export const registerUser = async (userData) => {
  users.push({ ...userData, id: Math.ceil(Math.random() * 500) });
};

export const getSingleProduct = (productId) => {
  return products.find((pro) => pro.id == productId);
};

// productData = {
//   "title": 'Gretas Fury',
//   "price": 999,
//   "specialEdition": true,
//   "shortDesc": 'Unisex',
//   "longDesc": 'Skate ipsum dolor sit amet...',
//   "imgFile": 'skateboard-greta.png'
// }
export const createNewProduct = async (productData) => {
  const product = { ...productData, id: Math.ceil(Math.random() * 500) };
  products.push(product);
};

export const updateProduct = (productId, productData) => {
  let pro = products.find((pro) => pro.id == productId);
  pro = { ...pro, ...productData, id: pro.id };
  const index = products.findIndex((pro) => pro.id == productId);
  products.splice(index, 1, pro);
};

export const deleteProduct = async (productId) => {
  const index = products.findIndex((pro) => pro.id == productId);
  products.splice(index, 1);
};
// response will be according to user status
// admin -> get all orders
// user -> get all his/her orders
export const getAllOrders = async () => {
  return orders;
};

export const getSingleOrder = async (orderId) => {
  return orders.find((order) => order.id == orderId);
};

// orderData = {
//   "title": 'Gretas Fury',
//   "price": 999,
//   "specialEdition": true,
//   "shortDesc": 'Unisex',
//   "longDesc": 'Skate ipsum dolor sit amet...',
//   "imgFile": 'skateboard-greta.png'
// }
export const createNewOrder = async (orderData) => {
  orders.push({ ...orderData, id: Math.ceil(Math.random() * 500) });
};
// orderStatus = {status: ...}
export const updateOrderStatus = async (orderId, orderStatus) => {
  let order = orders.find((order) => order.id == orderId);
  const index = orders.findIndex((order) => order.id == orderId);
  order = { ...order, status: orderStatus };
  orders.splice(index, 1, order);
};

export const updateInloggedUserProfile = async (userData) => {
  let user = users.find((user) => user.id == userData.id);
  let index = users.findIndex((user) => user.id == userData.id);
  users.splice(index, 1, { ...user, ...userData });
};
