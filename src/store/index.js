import Vue from "vue";
import Vuex from "vuex";
import ordersModules from "./modules/ordersModules.js";
import userModule from "./modules/userModule";
import productsModule from "./modules/productsModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { userModule, productsModule, ordersModules },
});
