import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import PageNotFound from '@/views/PageNotFound'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome,
        children: [
            {
                path: '/Products',
                name: 'Products',
                component: ProductsView,
            }
        ]
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "Cart" */ '../views/CartView.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router