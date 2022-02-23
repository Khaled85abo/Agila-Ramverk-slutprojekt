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
    [Actions.REMOVE_FROM_CART]({ commit }, index) {
      commit(Mutations.REMOVE_FROM_CART, index);
    },
    [Actions.UPDATE_QUANTITY]({ commit }, data) {
      commit(Mutations.UPDATE_QUANTITY, data);
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
      const existingProduct = state.cart.find((pro) => pro.id == product.id);
      console.log(existingProduct);
      if (!existingProduct) {
        state.cart.push({ ...product, qty: 1 });
      } else {
        existingProduct.qty = existingProduct.qty + 1;
      }
      console.log(state.cart);
      // const newProduct = {...product, qty: 1}
    },
    [Mutations.REMOVE_FROM_CART](state, index) {
      state.cart.splice(index, 1);
    },
    [Mutations.UPDATE_QUANTITY](state, data) {
      state.cart[data.index].qty = Number(data.qty);
      console.log(state.cart);
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
  getters: {
    totalPrice(state) {
      return state.cart.reduce((pre, curr) => pre + curr.qty * curr.price, 0);
    },
    totalItemsCount(state) {
      return state.cart.reduce((pre, curr) => pre + Number(curr.qty), 0);
    },
  },
};
