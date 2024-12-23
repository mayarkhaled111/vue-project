import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import TaskManagement from '../views/TaskManagement.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/task',
    name: 'task',
    component: TaskManagement
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
