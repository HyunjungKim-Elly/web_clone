import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
window.axios = require('axios')
//Vue.prototype.$http = window.axios;
//axios.defaults.baseURL = 'http://passport.test/api'

new Vue({
  vuetify,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')