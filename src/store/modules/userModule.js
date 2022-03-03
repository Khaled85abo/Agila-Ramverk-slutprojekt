import Actions from "../actions.types";
import router from "../../router";
import Mutations from "../mutations.types";
import * as API from "../../api";
export default {
  state: () => ({
    currentUserEmail: null,
    user: null,
    unloggedUserAddress: null,
    response: null,

    anonymUser: [],
    userCardInfo: [],
  }),
  actions: {
    async [Actions.GET_USER]({ commit }) {
      try {
        const res = await API.getUserInfo();
        console.log("get user info res: ", res);
        if (!res.error) {
          commit(Mutations.SET_USER, res.data);
          router.push("/profile");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
      }
    },
    //credentials ={email: '', password: ''}
    async [Actions.LOGIN]({ commit, dispatch }, credentials) {
      try {
        const res = await API.login(credentials);
        console.log("login res: ", res);
        if (!res.error) {
          API.saveToken(res.data.token);
          dispatch(Actions.GET_USER);
          dispatch(Actions.GET_ALL_ORDERS);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        commit(Mutations.SET_RESPONSE, {
          type: "error",
          message: error.response.data.error,
        });
      }
    },
    [Actions.SIGN_OUT]({ commit }) {
      commit(Mutations.SIGN_OUT);
    },
    // userData = {
    //   "email": 'greta.thunberg@example.se',
    //   "password": 'grillkorv123',
    //   "name": 'Johan Kivi',
    //   "address": {
    //     "street": 'Tokitokvägen 3',
    //     "zip": '123 45',
    //     "city": 'Tokberga'
    //   }
    // }
    async [Actions.REGISTER_USER]({ commit }, userData) {
      try {
        const res = await API.registerUser(userData);
        if (!res.error) {
          API.saveToken(res.data.token);
          commit(Mutations.SET_USER, res.data.user);
          router.push("/");
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error);
        if (error.response.data.error) {
          commit(Mutations.SET_RESPONSE, {
            type: "error",
            message: error.response.data.error,
          });
        } else {
          commit(Mutations.SET_RESPONSE, {
            type: "error",
            message: error.response.data.errors[0].msg,
          });
        }
      }
    },

    async [Actions.UPDATE_USER]({ commit }, data) {
      try {
        const res = await API.updateProfile(data);
        console.log("res from updating user: ", res.data);
        if (!res.error) {
          console.log("successful update: ", res);
          commit(Mutations.SET_RESPONSE, {
            type: "success",
            message: res.data.message,
          });
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error.response.data.error);
        commit(Mutations.SET_RESPONSE, {
          type: "error",
          message: error.response.data.error,
        });
      }
    },

    [Actions.SET_RESPONSE]({ commit }, reponse) {
      commit(Mutations.SET_RESPONSE, reponse);
    },
    [Actions.RESET_RESPONSE]({ commit }) {
      commit(Mutations.RESET_RESPONSE);
    },

    [Actions.ANONYM_USER]({ commit }, payload) {
      commit(Mutations.ANONYM_USER, payload);
    },
    [Actions.USER_CARD_INFO]({ commit }, payload) {
      commit(Mutations.USER_CARD_INFO, payload);
    },
  },
  mutations: {
    [Mutations.USER_CARD_INFO](state, payload) {
      state.userCardInfo.push(payload);
    },
    [Mutations.ANONYM_USER](state, payload) {
      state.anonymUser.push(payload);
    },
    [Mutations.SET_USER](state, user) {
      console.log("commit set user: ", user);
      state.user = user;
    },

    [Mutations.SIGN_OUT](state) {
      state.user = null;
      router.push("/");
    },
    [Mutations.SET_RESPONSE](state, response) {
      state.response = response;
    },
    [Mutations.RESET_RESPONSE](state) {
      state.response = null;
    },
  },
  getters: {},
};
