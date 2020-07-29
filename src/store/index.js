import Vue from 'vue'
import Vuex from 'vuex'
// import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })


export default new Vuex.Store({
  state: {
    errors: null,
    recconect:false,
    users:[],
    user: null,
    dialogs: []
  },
  mutations,
  actions,
  modules: {
  },
  // getters: {
  //   hasError: state => state.errors ? true : false
  // },
  // plugins: [vuexLocal.plugin],
})
