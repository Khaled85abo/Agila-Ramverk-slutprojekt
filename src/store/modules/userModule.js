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
    address: null,
    loginError: null,
    signupError: null,
  }),
  actions: {
    async [Actions.GET_USER]({ commit }) {
      try {
        const res = await API.getUserInfo();
        console.log("get user info res: ", res);
        if (!res.error) {
          commit(Mutations.SET_USER, res.data);
          router.push("/");
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
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        commit(Mutations.SET_LOGIN_ERROR, error.response.data.error);
      }
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
        if (!res.error) {
          console.log("successful update: ", res);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }

      commit(Mutations.SET_USER);
    },

    async [Actions.RESET_LOGIN_ERROR]({ commit }) {
      commit(Mutations.RESET_LOGIN_ERROR);
    },
    async [Actions.RESET_REGISTER_ERROR]({ commit }) {
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
