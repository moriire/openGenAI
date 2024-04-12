import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenerativeView from '../views/GenerativeView.vue'
import ChatView from '../views/ChatView.vue'
import SettingsView from '../views/SettingsView.vue'
import ModelsView from '../views/ModelsView.vue'
import VoiceView from '../views/VoiceView.vue'
import { useAuthStore } from '@/stores/auth';
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  //history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/auth/LoginView.vue'),
  },
  {
      path: '/register',
      component: () => import('@/views/auth/RegisterView.vue'),
  },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gen',
      name: 'gen',
      component: GenerativeView
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/models',
      name: 'models',
      component: ModelsView
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
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.token) {
      next('/login');
  } else {
      next();
  }
});

export default router
