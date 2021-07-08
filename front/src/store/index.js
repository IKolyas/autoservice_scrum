import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import urls from "../api/urls";
import {getOrders, postLogin} from "../api/metods";


export default new Vuex.Store({
  state: {
    user: '',
    token: localStorage.getItem('token') || '',
    orders: ''
  },
  mutations: {
    setToken({state}, token) {
      localStorage.setItem('token', token)
    },
    setUser(state, user) {
      state.user = user
    },
    setOrders(state, orders) {
      console.log(orders)
      state.orders = orders
    }
  },
  actions: {
    login({commit, state}, data) {
      postLogin(urls.login, data)
        .then(response => {
          const token = response.data.token || ''
          const user = response.data.user || ''
          if (token && user) {
            commit('setToken', token);
            commit('setUser', user)
          }
        })
    },
    getOrders({commit, state}) {
      getOrders(urls.orders, state.token).then(response => {
        console.log(response.data)
        const orders = response.data
        commit('setOrders', orders)
      })
    }
  },
  getters: {
    getToken: state => state.token(),
    getUser: state => state.user,
    getOrders: state => state.orders || ''
  },
  modules: {}
})
