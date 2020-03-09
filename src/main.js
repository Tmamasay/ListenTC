import Vue from 'vue'
import App from './App'
import api from './api/index'
import store from './store/index'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(api)
Vue.prototype.$store=store;
const app = new Vue(App)
app.$mount()
