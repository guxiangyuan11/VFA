import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import pubSub from 'pubsub-js'
import ViewUI from 'view-design';
// import style
import 'view-design/dist/styles/iview.css';
import './assets/iconfont/iconfont.css'
import './assets/css/common.scss'

Vue.use(ViewUI);
Vue.prototype.$pubSub = pubSub


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
