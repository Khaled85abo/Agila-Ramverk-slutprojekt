import Actions from "../actions.types";
import Mutations from "../mutations.types";
import * as API from "../../api";
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
    async [Actions.ADD_TO_CART](context, product) {
      context.commit(Mutations.ADD_TO_CART, product);
    },
    async [Actions.ADD_SHIPPING]({ commit }, shippingInfo) {
      commit(Mutations.ADD_SHIPPING, shippingInfo);
    },
    async [Actions.ADD_PAYMENT_METHOD]({ commit }, paymentMethod) {
      commit(Mutations.ADD_PAYMENT_METHOD, paymentMethod);
    },
    async [Actions.GET_ALL_ORDERS]({ commit }) {
      try {
        const res = await API.getAllOrders({ commit });
        console.log(res);
        if (!res.error) {
          console.log("success getting order: ", res.data);
          commit(Mutations.SET_ORDERS, res.data);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log("error getting order: ", error.response.data);
      }
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
    [Mutations.ADD_TO_CART](state, product) {
      if(!state.cart.some((productElement) => productElement.id == product.id )){
        state.cart.push(product);
        console.log(state.cart);
      }else{
        console.log('product already in cart');
      }
    },
    [Mutations.ADD_SHIPPING](state, shippingInfo) {
      state.shippingInfo = shippingInfo;
    },
    [Mutations.ADD_PAYMENT_METHOD](state, paymentMethod) {
      state.paymentMethod = paymentMethod;
    },
    [Mutations.SET_ORDERS](state, orders) {
      state.ordersList = orders;
      orders.forEach((order) => (state.ordersObj[order.id] = order));
    },
  },
  getters: {},
};
