import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import moment from 'moment'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$eventHub = new Vue (); 
Vue.prototype.moment = moment

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')



