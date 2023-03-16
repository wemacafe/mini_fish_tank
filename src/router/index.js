import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'front',
      component: ()=>import('../views/FrontView.vue'),
      children:[
        {
          path: '',
          name: 'homeview',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'products',
          name: 'productsview',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'product/:id',
          name: 'productview',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: 'carts',
          name: 'cartsview',
          component: () => import('../views/CartsView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    }   
  ]
})

export default router
