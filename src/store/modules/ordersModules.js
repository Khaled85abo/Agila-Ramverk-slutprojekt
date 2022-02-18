import Actions from "../actions.types";
import Mutations from "../mutations.types";
import * as API from "../../api/mockApi";
export default {
  state: () => ({
    // allOrdersList: [],
    // allOrdersObj: {},
    // updateOrderStatusError: null
    ordersList: [],
    ordersObj: {},
    cart: [],
    shippingInfo: null,
    paymentMethod: null,
  }),
  actions: {
    async [Actions.ADD_PRODUCT](context, product) {
      context.commit(Mutations.ADD_PRODUCT, product);
    },
    async [Actions.ADD_SHIPPING]({ commit }, shippingInfo) {
      commit(Mutations.ADD_SHIPPING, shippingInfo);
    },
    async [Actions.ADD_PAYMENT_METHOD]({ commit }, paymentMethod) {
      commit(Mutations.ADD_PAYMENT_METHOD, paymentMethod);
    },
    async [Actions.GET_ALL_ORDERS]({ rootState }) {
      const user = rootState.userModule.user;
      if (user) {
        const allOrders = await API.getAllOrders(user);
        console.log(allOrders);
      }
      console.log(rootState);
    },
    async [Actions.REGISTER_ORDER]({ state, rootState }) {
      try {
        await API.registerOrder({
          userEmail: rootState.userModule.currentUserEmail,
          items: state.cart,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    [Mutations.ADD_PRODUCT](state, product) {
      state.cart.push(product);
      console.log(state.cart);
    },
    [Mutations.ADD_SHIPPING](state, shippingInfo) {
      state.shippingInfo = shippingInfo;
    },
    [Mutations.ADD_PAYMENT_METHOD](state, paymentMethod) {
      state.paymentMethod = paymentMethod;
    },
  },
  getters: {},
};
