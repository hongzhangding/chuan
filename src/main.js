import Vue from 'vue'
import  VueRouter from 'vue-router'
import App from './App.vue'

// 定义Vue可以使用VueRouter
Vue.use(VueRouter)


import routers from './js/roeuter.js'

import store from './store/store.js'
new Vue({
  el: '#app',
  render: h => h(App),
  router:routers,
  store
})
