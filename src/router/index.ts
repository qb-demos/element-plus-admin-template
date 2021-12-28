import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/layout/HomeCom/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard/index.vue'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
