import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy-loaded route: loaded only when visited
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/school',
      name: 'school',
      component: () => import('../views/SchoolProjectsView.vue'),
    },
    {
      path: '/projects/extracuricular',
      name: 'extracuricular',
      component: () => import('../views/ExtracuriculatProjectsView.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactsView.vue'),
    },
  ],
})

export default router
