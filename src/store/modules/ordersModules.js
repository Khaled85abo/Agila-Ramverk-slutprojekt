import Actions from "../actions.types";
import Mutations from "../mutations.types";
import * as API from "../../api";
export default {
  state: () => ({
    ordersList: [],
    ordersObj: {},
    cart: [],
    shippingInfo: null,
    paymentMethod: null,
    response: null,
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
    async [Actions.GET_ALL_ORDERS]({ commit, dispatch }) {
      try {
        const res = await API.getAllOrders();
        if (!res.error) {
          if (res.data.length > 0) {
            // get all individual products res.data = [{items: [{ProductId}]}]
            await res.data.forEach((order) => {
              order.items.forEach((item) =>
                dispatch(Actions.GET_PRODUCT, item.ProductId)
              );
            });
          }
          commit(Mutations.SET_ORDERS, res.data);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log("error getting order: ", error.response);
      }
    },
    async [Actions.REGISTER_ORDER]({ state, rootState }) {
      try {
        await API.addProduct({
          userEmail: rootState.userModule.currentUserEmail,
          items: state.cart,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async [Actions.UPDATE_STATUS]({ commit }, { status, orderId }) {
      console.log(status, orderId);
      try {
        const res = await API.updateOrderStatus(orderId, { status: status });
        if (!res.error) {
          console.log(res.data.message);
          commit(Mutations.UPDATE_RES, {
            message: res.data.message,
            type: "success",
          });
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
        commit(Mutations.UPDATE_RES, {
          message: error.response.data.error,
          type: "error",
        });
      }
    },
    [Actions.RESET_RESPONSE]({ commit }) {
      commit(Mutations.RESET_UPDATE_STATUS_RESPONSE);
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
    [Mutations.UPDATE_RES](state, res) {
      state.response = res;
    },
    [Mutations.RESET_UPDATE_STATUS_RESPONSE](state) {
      state.response = null;
    },
  },
  getters: {
    totalPrice(state) {
      return state.cart.reduce((pre, curr) => pre + curr.qty * curr.price, 0);
    },
    totalItemsCount(state) {
      return state.cart.reduce((pre, curr) => pre + Number(curr.qty), 0);
    },
    allOrders(state, getters, rootState) {
      console.log(getters);
      let updatedOrders = [];
      for (let order of state.ordersList) {
        let items = [];
        for (let item of order.items) {
          const updatedItem = {
            ...item,
            // product: rootState.productsModule.allProductsObj[item.ProductId],
            product: rootState.productsModule.allProductsObj[item.ProductId],
          };
          items.push(updatedItem);
        }
        const newOrder = { ...order, items };
        updatedOrders.push(newOrder);
      }
      return updatedOrders;
    },
  },
};
