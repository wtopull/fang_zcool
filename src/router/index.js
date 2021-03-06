import Vue from 'vue'
import VueRouter from 'vue-router'
import Current from '../views/current/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/current'
    },
    {
        path: '/',
        redirect: '/current'
    },
    {
        path: '/current',
        name: 'current',
        component: Current,
    },
    {
        path: '/discover',
        name: 'discover',
        component: () => import(/* webpackChunkName: "discover" */ '../views/discover/index.vue')
    },
    {
        path: '/designer',
        name: 'designer',
        component: () => import(/* webpackChunkName: "designer" */ '../views/designer/index.vue')
    },
    {
        path: '/job',
        name: 'job',
        redirect: "/job/",
        component: () => import(/* webpackChunkName: "job" */ '../views/job/index.vue'),
        children: [
            {
                path: '/',
                name: 'job',
                component: () => import(/* webpackChunkName: "job" */ '../views/job/job.vue')
            },
            {
                path: '/job/enterprise',
                name: 'enterprise',
                component: () => import(/* webpackChunkName: "enterprise" */ '../views/job/enterprise.vue')
            },
            {
                path: '/job/resumes',
                name: 'resumes',
                component: () => import(/* webpackChunkName: "resumes" */ '../views/job/resumes.vue')
            },
        ]
    },
    {
        path: '/special',
        name: 'special',
        component: () => import(/* webpackChunkName: "special" */ '../views/special/index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
