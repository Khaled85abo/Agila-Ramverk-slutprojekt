export default {
  state: () => ({
    // allOrdersList: [],
    // allOrdersObj: {},
    // updateOrderStatusError: null
      cart: []
  }),
  actions: {
  },
  mutations: {
    addToCart(state, product){
      state.cart.push(product)
      console.log(state.cart)
    }
  },
  getters: {},
};
