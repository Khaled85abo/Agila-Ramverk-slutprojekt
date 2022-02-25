import * as API from "../../api";
import Actions from "../actions.types";
import Mutations from "../mutations.types";
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
    searchResponse: []
  }),
  actions: {
    // GET ALL PRODUCTS FROM CATEGORY
    async [Actions.GET_ALL_PRODUCTS](
      { commit },
      {category}
      // page = o,
      // pageSize = 0
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
          commit(Mutations.SET_PRODUCT, res.data);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async searchProducts( { commit }, searchQuery){
      try {
        const res = await API.searchProduct(searchQuery)
        if(!res.error) {
          commit(Mutations.SEARCH_PRODUCTS, res.data)
          console.log(res)
          console.log(res.data)
        }
        else {
          throw new Error(res.error)
        }
      }
      catch (error){
        console.log(error)
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
    async [Actions.ADD_PRODUCT](context, newProduct) {
      try {
        const res = await API.addProduct(newProduct);
        if (!res.error) {
          console.log("succssufl adding new product");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
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
    async [Actions.UPDATE_PRODUCT](context, id) {
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
      state.allProductsObj[pro.id] = pro;
    },
    [Mutations.SEARCH_PRODUCTS](state, data) {
      state.searchResponse.splice(0,state.searchResponse.length);
      state.searchResponse.push(data)
      console.log("Data är: " + data)
      console.log("State är :" + state)
    }

  },
  getters: {
    
    getProductsByCategory: state => category => 
      state.allProductsList.filter(product => product.category == category),
  },
};
