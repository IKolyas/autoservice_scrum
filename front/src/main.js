import Vue from 'vue'
import { BootstrapVue, IconsPlugin, FormPlugin, SpinnerPlugin  } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './assets/style/styles.sass'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(FormPlugin)
Vue.use(SpinnerPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
