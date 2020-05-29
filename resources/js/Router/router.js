import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/Login'
const routes = [
    { path: '/login', component: Login },
    // { path: '/bar', component: Bar }
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history' // removes # on browser url bar when using the vue-router 

})

export default router