import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {fb} from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },

  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },

  {
    path: '/items',
    name: 'Items',
    component: () => import(/* webpackChunkName: "about" */ '../views/ItemsView.vue')
  },


  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoView.vue')
  },

  {
    path: '/mojalista',
    name: 'Moja Lista',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MojalistaView.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})





/*
router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/login')
  }
  else if (requiresAuth && currentUser){
    next()
  }
  else {
    next()
  }
}) 
*/

export default router