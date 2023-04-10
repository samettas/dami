import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
    
  },
  {
    path: '/YardimSever',
    name: 'YardimSever',
    component: () => import(/* webpackChunkName: "about" */ '../views/YardimSever.vue')
 }
 ,
  {
    path: '/Gonullu',
    name: 'Gonullu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gonullu.vue')
 }
 ,
  {
    path: '/IhtiyacFormu',
    name: 'IhtiyacFormu',
    component: () => import(/* webpackChunkName: "about" */ '../views/IhtiyacFormu.vue')
 }
 ,
  {
    path: '/Iletisim',
    name: 'Iletisim',
    component: () => import(/* webpackChunkName: "about" */ '../views/Iletisim.vue')
 } ,
 {
   path: '/AracFormu',
   name: 'AracFormu',
   component: () => import(/* webpackChunkName: "about" */ '../views/AracFormu.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
