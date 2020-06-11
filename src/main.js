import Vue from 'vue'

import 'es6-promise/auto'
import Vuex from 'vuex'

import store from './store'

import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex);

// 判断用户是否登录
let isAuthenticated=store.getters['login/userInfo'];

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
