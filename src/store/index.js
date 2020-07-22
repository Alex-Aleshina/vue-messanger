import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    users:[],
    user:[],
    messages: [],
    userOnline: false,
    error: null
  },
  mutations,
  actions,
  modules: {
  },
  getters: {
    hasError: state => state.error ? true : false
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})
