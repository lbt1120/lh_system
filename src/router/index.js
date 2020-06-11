import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home/router/index'
import login from '@/view/login/router/index'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        ...home,
        ...login,
    ]
})