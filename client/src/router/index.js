import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const user = useUserStore()
  if (!user.isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  if (user.isAuthenticated && to.name == 'login') {
    return { name: 'home' }
  }
})

export default router
