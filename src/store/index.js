import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  state: {
    users:[],
    user: null,
    dialogs: [],
    isloading: false
  },
  mutations,
  actions,
  modules: {
  },
  getters: {
    hasError: state => state.error ? true : false
  },
  // strict: debug
})
