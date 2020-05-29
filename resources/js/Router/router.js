import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/Login/Login'
import SignUp from '../components/Login/SignUp'
import Logout from '../components/Login/Logout'
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