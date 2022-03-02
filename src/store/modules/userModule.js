import Actions from "../actions.types";
import router from "../../router";
import Mutations from "../mutations.types";
import * as API from "../../api";
export default {
  state: () => ({
    // userId: null,
    // userEmail: null,
    // userToken: null,
    // loginError: null,
    // updateUserInfoError: null,
    currentUserEmail: null,
    user: null,
    unloggedUserAddress: null,
    loginError: null,
    signupError: null,
    updateRes: null,
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
        commit(Mutations.SET_LOGIN_ERROR, error.response.data.error);
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
          commit(Mutations.SET_REGISTER_ERROR, error.response.data.error);
        } else {
          commit(
            Mutations.SET_REGISTER_ERROR,
            error.response.data.errors[0].msg
          );
        }
      }
    },

    async [Actions.UPDATE_USER]({ commit }, data) {
      try {
        const res = await API.updateProfile(data);
        console.log("res from updating user: ", res.data);
        if (!res.error) {
          console.log("successful update: ", res);
          commit(Mutations.UPDATE_RES, {
            status: "success",
            message: res.data.message,
          });
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error.response.data.error);
        commit(Mutations.UPDATE_RES, {
          status: "error",
          message: error.response.data.error,
        });
      }
    },

    [Actions.RESET_LOGIN_ERROR]({ commit }) {
      commit(Mutations.RESET_LOGIN_ERROR);
    },
    [Actions.RESET_REGISTER_ERROR]({ commit }) {
      commit(Mutations.RESET_REGISTER_ERROR);
    },
    [Actions.RESET_RESPONSE]({ commit }) {
      commit(Mutations.RESET_RESPONSE);
    },
    [Actions.ANONYM_USER]({commit}, payload){
      commit(Mutations.ANONYM_USER, payload)
    },
    [Actions.USER_CARD_INFO]({commit}, payload){
      commit(Mutations.USER_CARD_INFO, payload)
    },

  },
  mutations: {
    [Mutations.USER_CARD_INFO](state, payload){
      state.userCardInfo.push(payload)
    },
    [Mutations.ANONYM_USER](state, payload){
      state.anonymUser.push(payload)
    },
    [Mutations.SET_USER](state, user) {
      console.log("commit set user: ", user);
      state.user = user;
    },
    [Mutations.SET_LOGIN_ERROR](state, error) {
      state.loginError = error;
    },
    [Mutations.RESET_LOGIN_ERROR](state) {
      state.loginError = null;
    },
    [Mutations.SET_REGISTER_ERROR](state, error) {
      state.signupError = error;
    },
    [Mutations.RESET_REGISTER_ERROR](state) {
      state.signupError = null;
    },
    [Mutations.SIGN_OUT](state) {
      state.user = null;
      router.push("/");
    },
    [Mutations.UPDATE_RES](state, res) {
      state.updateRes = res;
    },
    [Mutations.RESET_RESPONSE](state) {
      state.updateRes = null;
    },
  },
  getters: {},
};
