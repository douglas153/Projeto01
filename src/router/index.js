import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue' 
import Produtos from '../views/Produtos.vue' 
import Listas from '../views/Listas.vue' 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About 
  },
  {
  path: '/projects',
  name: 'projects',
  component: Projects
  },

  {
  path: '/produtos',
  name: 'produtos',
  component: Produtos
  },
  {
    path: '/listas',
    name: 'listas',
    component: Listas
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
