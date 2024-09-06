import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import VoiceView from '../views/VoiceView.vue'
import { useAuthStore } from '@/stores/auth'
const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import('@/views/base/AuthBase.vue'),
      path: '/auth',
      children: [
        {
          path: 'login',
          alias: '/',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/auth/RegisterView.vue')
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/views/base/PageBase.vue'),
      children: [
        {
          path: '/gen',
          name: 'gen',
          component: ()=> import('@/views/GenerativeView.vue'),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/chat',
          name: 'chat',
          component: import('@/views/ChatView.vue'),
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
    {
      path: '/voice',
      name: 'voice',
      component: VoiceView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// Route guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.token) {
    next('/login')
    //next('/login');
  } else {
    next()
  }
})

export default router