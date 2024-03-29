import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: HomePage
    },
    {
        path: '/converter',
        component: () => import('./views/ConverterPage.vue')
    }
]
})