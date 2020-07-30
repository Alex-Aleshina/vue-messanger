import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont'
import './assets/styles/styles.scss'
import * as firebase from 'firebase/app'
import VueChatScroll from 'vue-chat-scroll'


Vue.use(VueChatScroll)

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyDWOj6ZpYTaDV7iGvioaj0hNFXZJ6dVcX0",
    authDomain: "vue-messanger-2115f.firebaseapp.com",
    databaseURL: "https://vue-messanger-2115f.firebaseio.com",
    projectId: "vue-messanger-2115f",
    storageBucket: "vue-messanger-2115f.appspot.com",
    messagingSenderId: "684327966549",
    appId: "1:684327966549:web:0a57d3ea97369ceeca41dc"
  };

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
