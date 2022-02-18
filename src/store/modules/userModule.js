import Actions from "../actions.types";
import * as API from "../../api";
export default {
  state: () => ({
    // userId: null,
    // userEmail: null,
    // userToken: null,
    // loginError: null,
    // updateUserInfoError: null,
  }),
  actions: {
    async [Actions.LOGIN](context, data) {
      const res = await API.login(data);
      console.log(res);
    },
  },
  mutations: {},
  getters: {},
};
