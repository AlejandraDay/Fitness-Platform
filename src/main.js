import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.config.productionTip = false

Vue.use(Vuesax);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
