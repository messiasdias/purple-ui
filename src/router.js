import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/pages/Home.vue'
import Projects from './components/pages/Projects.vue'
import Tasks from './components/pages/Tasks.vue'

let Router  = {
    base: '/purple-ui/',
    mode: 'hash',
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
        {
            name: 'Tasks',
            path: '/tasks',
            alias: '/Tasks',
            component: Tasks
        },
    ]
}


Vue.use(VueRouter)
export default new VueRouter(Router)