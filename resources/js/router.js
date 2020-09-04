import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import newPage from './components/pages/newPage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks'
import methods from './components/pages/basic/methods'
const routes = [
    {
        path: '/my-route',
        component: newPage,
    },
    {
        path: '/newpage',
        component : newRoutePage,
    },

    // Vue Hooks
    {
        path: '/hook',
        component: hooks,

    },
    // Vue methods
    {
        path: '/methods',
        component: methods,

    }
]
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })
