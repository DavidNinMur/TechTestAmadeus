import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import MovieLibrary from '../views/movieLibrary/movieLibrary.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie-library',
      name: 'movieLibrary',
      component: MovieLibrary
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
