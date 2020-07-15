import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'

let Router  = {
    base: '/purple-ui/',
    mode: 'history',
    routes: [
        {
            name: 'Home',
            path: '/',
            alias: '/home',
            component: Home
        },
        {
            name: 'Projects',
            path: '/projects',
            alias: '/Projects',
            component: Projects
        },
    ]
}


Vue.use(VueRouter)
export default new VueRouter(Router)