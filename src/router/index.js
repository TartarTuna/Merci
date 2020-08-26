import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FrontLayout',
    component: () => import('../views/front/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'Index',
        component: () => import('../views/front/Index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/front/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/front/Products.vue')
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/front/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/front/Cart.vue')
      },
      {
        path: 'paymentTable',
        name: 'PaymentTable',
        component: () => import('../views/front/PaymentTable.vue')
      },
      {
        path: 'complete/:orderId',
        name: 'Complete',
        component: () => import('../views/front/Complete.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/backStage/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/backStage/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backStage/dashboard/Products.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backStage/dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backStage/dashboard/Coupons.vue')
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('../views/backStage/dashboard/Images.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
