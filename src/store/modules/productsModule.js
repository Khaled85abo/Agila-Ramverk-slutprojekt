import * as API from "../../api/mockApi";
import Actions from "../actions.types";
import Mutations from "../mutations.types";
export default {
  state: () => ({
    allProductsList: [],
    allProductsObj: {},
    // allImagesList: [],
    // allImagesObj: {},
    // updateProductError: null,
    // createProductError: null,
  }),
  actions: {
    async [Actions.GET_ALL_PRODUCTS](context) {
      const res = await API.getAllProducts();
      console.log(res);
      context.commit(Mutations.SET_PRODUCTS, res);
    },
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, data) {
      state.allProductsList = data;
      data.forEach((pro) => (state.allProductsObj[pro.id] = pro));
    },
  },
  getters: {},
};
