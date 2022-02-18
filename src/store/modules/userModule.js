import Actions from "../actions.types";
import * as API from "../../api";
export default {
  state: () => ({
    // userId: null,
    // userEmail: null,
    // userToken: null,
    // loginError: null,
    // updateUserInfoError: null,
    currentUserEmail: "johan@live.se",
    user: {
      id: 3,
      admin: false,
      name: "Johan",
      email: "johan.se@live.se",
      address: {
        street: "Tokitokvägen 3",
        zip: "123 45",
        city: "Tokberga",
      },
    },
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
