import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont'
import './assets/styles/login.scss'
// import VueChatScroll from 'vue-chat-scroll'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
