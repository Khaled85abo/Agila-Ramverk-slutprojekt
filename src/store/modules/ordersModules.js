import Actions from "../actions.types";
import Mutations from "../mutations.types";
export default {
  state: () => ({
    // allOrdersList: [],
    // allOrdersObj: {},
    // updateOrderStatusError: null
    cart: [],
  }),
  actions: {
    async [Actions.ADD_PRODUCT](context, product) {
      context.commit(Mutations.ADD_PRODUCT, product);
    },
  },
  mutations: {
    [Mutations.ADD_PRODUCT](state, product) {
      state.cart.push(product);
      console.log(state.cart);
    },
  },
  getters: {},
};
