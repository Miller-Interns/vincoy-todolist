import { createRouter, createWebHistory } from 'vue-router'
import PageTwo from '../components/page-two.vue'
import HomeView from '../components/page-one.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/page-two',
    name: 'page-two',
    component: PageTwo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router