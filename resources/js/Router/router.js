import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import Logout from '../components/Auth/Logout'
import Forum from '../components/Forum/Forum'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: SignUp },
    { path: '/forum', name: 'forum', component: Forum }
]


const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history' // removes # on browser url bar when using the vue-router 

})

export default router