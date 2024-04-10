import {createRouter, createWebHistory} from 'vue-router'
import {rootRoutes} from "@/router/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: rootRoutes
})

export default router
