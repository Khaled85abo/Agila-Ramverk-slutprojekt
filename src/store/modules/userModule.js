import Actions from "../actions.types";
import router from "../../router";
import Mutations from "../mutations.types";
import * as API from "../../api/mockApi";
export default {
  state: () => ({
    // userId: null,
    // userEmail: null,
    // userToken: null,
    // loginError: null,
    // updateUserInfoError: null,
    currentUserEmail: null,
    user: null,
    address: null,
    loginError: null,
    signupError: null,
  }),
  actions: {
    //data ={email: '', password: ''}
    [Actions.LOGIN]({ commit }, data) {
      console.log(data);
      const res = API.login(data);
      console.log("response: ", res);
      if (res.response === "error") {
        commit(Mutations.SET_LOGIN_ERROR, res.error);
      } else {
        commit(Mutations.SET_USER, res);
        router.push("/");
      }
    },
    // data ={name: '', email: '', password: ''}
    [Actions.REGISTER_USER]({ commit }, data) {
      const res = API.registerUser(data);
      console.log("register user response: ", res);
      if (res.response === "error") {
        commit(Mutations.SET_REGISTER_ERROR, res.error);
      } else {
        commit(Mutations.SET_USER, res);
        router.push("/");
      }
    },
    // data = {id: , name: ''} || {id: ,email: ''} || {id: ,name: '', email: '', password: ''}
    [Actions.UPDATE_USER]({ commit }, data) {
      const newUser = API.updateUserProfile(data);
      commit(Mutations.SET_USER, newUser);
    },
    [Actions.RESET_LOGIN_ERROR]({ commit }) {
      commit(Mutations.RESET_LOGIN_ERROR);
    },
    [Actions.RESET_REGISTER_ERROR]({ commit }) {
      commit(Mutations.RESET_REGISTER_ERROR);
    },
  },
  mutations: {
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
  },
  getters: {},
};
