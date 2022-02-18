export default {
  state: () => ({
    // allOrdersList: [],
    // allOrdersObj: {},
    // updateOrderStatusError: null
      thisOrderList: []
  }),
  actions: {
  },
  mutations: {
    addToCart(state, product){
      state.thisOrderList.push(product)
      console.log(state.thisOrderList)
    }
  },
  getters: {},
};
