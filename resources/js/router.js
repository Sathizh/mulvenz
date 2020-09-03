import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import newpage from './components/pages/newPage'
// import newRoutePage from './components/pages/newRoutePage'
const routes = [
    {
        path: '/myRoute',
        component: require('./components/pages/newPage.vue'),
    },
    // {
    //     path: '/newpage',
    //     component : newRoutePage,
    // }
]
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
 })
