import { createRouter, createWebHistory } from 'vue-router'
import PageTwo from '../components/page-two.vue'
import HomeView from '../components/page-one.vue'
import { RouteNames } from '../route-names/route-name.ts'

const routes = [
  {
    path: '/',
    name: RouteNames.Home,
    component: HomeView,
  },
  {
    path: '/page-two',
    name: RouteNames.PageTwo,
    component: PageTwo,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
