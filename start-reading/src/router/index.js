import {createRouter, createWebHistory} from 'vue-router'
import {rootRoutes,whiteRoutes} from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rootRoutes
})
const token=localStorage.getItem('token')
router.beforeEach((to, from, next) => {
  if (whiteRoutes.includes(to.name)){
    next()
  }else if (token) {
    next()
  }
  next('/login')
})
export default router
