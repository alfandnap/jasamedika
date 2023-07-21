import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PasienPage from '../views/PasienPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kelurahan',
      name: 'kelurahan',
      component: AboutView
    },
    {
      path: '/pasien',
      name: 'pasien',
      component: PasienPage
    }
  ]
})

export default router
