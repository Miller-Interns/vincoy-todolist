import { createRouter, createWebHistory } from 'vue-router'
import StartPage from './components/start-page.vue'
import TodoPage from './components/todo-page.vue'

const routes = [
  { path: '/', component: StartPage },
  { path: '/todo', component: TodoPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})