import Vue from 'vue'
import VueRouter from 'vue-router'
import PrimeiraParte from '../views/PrimeiraParte.vue'
import ClubesLista from '../views/ClubesLista.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: PrimeiraParte
  },
  {
    path: '/classificacao',
    name: 'Classificação',
    component: ClubesLista
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
