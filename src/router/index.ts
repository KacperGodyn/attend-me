// router/index.ts or router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardStudentView from '../views/DashboardStudentView.vue'
import DashboardLecturerView from '../views/DashboardLecturerView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard/student', component: DashboardStudentView },
  { path: '/dashboard/lecturer', component: DashboardLecturerView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
