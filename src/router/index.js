import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: {
                name: 'Home'
            }
        }
    ]
})