import axios from 'axios';

const defaultState = {
  user: null,
};

const mutations = {
  SET_USER_DATA: (state, userData) => {
    state.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common.Authorization = `JWT ${userData.access}`;
  },
  CLEAR_USER_DATA: (state) => {
    state.user = null;
    localStorage.removeItem('user');
    axios.defaults.headers.common.Authorization = null;
  },
};

const actions = {
  register: ({ commit }, credentials) => axios
    .post('//localhost:8000/auth/register', credentials)
    .then(({ data }) => {
      commit('SET_USER_DATA', data);
    }),
  login({ commit }, credentials) {
    return axios
      .post('//localhost:8000/auth/login', credentials)
      .then(({ data }) => {
        commit('SET_USER_DATA', data);
      });
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA');
  },
};

const getters = {
  loggedIn: (state) => !!state.user,
};

export default {
  state: defaultState,
  mutations,
  actions,
  getters,
};
