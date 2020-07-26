import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/index.js'
// import axios from 'axios'

Vue.config.productionTip = false
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
