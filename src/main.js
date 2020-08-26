import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import 'bootstrap'
import Vue2Editor from 'vue2-editor'
import VueSweetalert2 from 'vue-sweetalert2'
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json'
import moneyFilter from './filters/money'
import dateFilter from './filters/date'
import './bus'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.$ = $

Vue.component('Loading', Loading)
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zhTW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(VueAxios, axios)
Vue.use(Vue2Editor)
Vue.use(VueSweetalert2)

Vue.filter('money', moneyFilter)
Vue.filter('date', dateFilter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
