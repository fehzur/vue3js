import { createStore } from 'vuex';

export default createStore({
  state: {
    loggedIn: false,
    user: null,
  },
  mutations: {
    login(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    }
    }
})