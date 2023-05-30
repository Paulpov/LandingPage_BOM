import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/other', component: () => import('../pages/Other.vue') },
]
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router
