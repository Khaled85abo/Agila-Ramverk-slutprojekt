import * as API from "../../api";
import Actions from "../actions.types";
import Mutations from "../mutations.types";
import Vue from "vue";
export default {
  state: () => ({
    allProductsList: [],
    allProductsObj: {},
    // thisProduct: {}
    // allImagesList: [],
    // allImagesObj: {},
    // updateProductError: null,
    // createProductError: null,
    productStatus: null,
    searchResponse: [],
    addProductError: null,
    addProductSuccess: null,
    uploadImageError: null,
  }),
  actions: {
    // GET ALL PRODUCTS FROM CATEGORY
    async [Actions.GET_ALL_PRODUCTS](
      { commit },
      { category } // page = o, // pageSize = 0
    ) {
      try {
        const res = await API.getAllProducts(category);
        if (!res.error) {
          console.log("success: ", res.data);
          commit(Mutations.SET_PRODUCTS, res.data);
        } else {
          throw new Error(res.error);
        }
        console.log(res);
      } catch (error) {
        console.log("error response: ", error);
      }
    },
    // GET SINGLE PRODUCT
    async [Actions.GET_PRODUCT]({ commit }, id) {
      try {
        const res = await API.getSingleProduct(id);
        if (!res.error) {
          commit(Mutations.SET_PRODUCT, res.data.post);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async searchProducts({ commit }, searchQuery) {
      try {
        const res = await API.searchProduct(searchQuery);
        if (!res.error) {
          commit(Mutations.SEARCH_PRODUCTS, res.data);
          console.log(res);
          console.log(res.data);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }

      //return res.data
    },
    // ADD PRODUCT /Only admins
    //  newProduct =  {
    //   "title": "...",
    //   "shortDesc": "...",
    //   "longDesc": "...",
    //   "imgFile": "...",
    //   "category": "...",
    //   "price": ...
    // }
    async [Actions.ADD_PRODUCT]({ commit }, newProduct) {
      try {
        const res = await API.addProduct(newProduct);
        if (!res.error) {
          console.log("response from adding product: ", res.data);
          commit(
            Mutations.SET_ADD_PRODUCT_SUCCESS,
            "Successful creating a new product"
          );
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        commit(Mutations.SET_ADD_PRODUCT_ERROR, error.response.data.error);
      }
    },
    [Actions.RESET_ADD_PRODUCT_ERROR]({ commit }) {
      commit(Mutations.RESET_ADD_PRODUCT_ERROR);
    },
    [Actions.RESET_ADD_PRODUCT_SUCCESS]({ commit }) {
      commit(Mutations.RESET_ADD_PRODUCT_SUCCESS);
    },
    async [Actions.UPLOAD_IMAGE]({ commit, dispatch }, data) {
      try {
        const res = await API.addImage(data.img);
        console.log(res);
        if (!res.error) {
          console.log(res.data);
          dispatch(Actions.ADD_PRODUCT, data.product);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        commit(Mutations.SET_ADD_PRODUCT_ERROR, error.response.data.error);
      }
    },
    // UPDATE PRODUCT  /Only admins
    //  updatedProduct =  {
    //   "title": "...",
    //   "shortDesc": "...",
    //   "longDesc": "...",
    //   "imgFile": "...",
    //   "category": "...",
    //   "price": ...
    // }
    async [Actions.UPDATE_PRODUCT](context, updatedProduct) {
      try {
        const res = await API.updateProduct(updatedProduct);
        if (!res.error) {
          console.log("successful updating product");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    // DELETE PRODUCT /Only admins
    async [Actions.DELETE_PRODUCT](context, id) {
      try {
        const res = await API.deleteProduct(id);
        if (!res.error) {
          console.log("successful deleting product");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, data) {
      state.allProductsList = data;
      data.forEach((pro) => (state.allProductsObj[pro.id] = pro));
    },
    [Mutations.SET_PRODUCT](state, pro) {
      Vue.set(state.allProductsObj, pro.id, pro);
    },
    [Mutations.SEARCH_PRODUCTS](state, data) {
      state.searchResponse.splice(0, state.searchResponse.length);
      state.searchResponse = data;
      state.allProductsList.unshift(...data);
      data.forEach((pro) => (state.allProductsObj[pro.id] = pro));
    },
    [Mutations.SET_ADD_PRODUCT_ERROR](state, error) {
      state.addProductError = error;
    },
    [Mutations.RESET_ADD_PRODUCT_ERROR](state) {
      state.addProductError = null;
    },
    [Mutations.SET_ADD_PRODUCT_SUCCESS](state, message) {
      state.addProductSuccess = message;
    },
    [Mutations.RESET_ADD_PRODUCT_SUCCESS](state) {
      state.addProductSuccess = null;
    },
  },
  getters: {
    getProductsByCategory: (state) => (category) =>
      state.allProductsList.filter((product) => product.category == category),
  },
};
