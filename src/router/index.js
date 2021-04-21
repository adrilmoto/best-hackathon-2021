import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicLayout from '../layouts/PublicLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      { path: '', component: () => import('@/pages/LandingPage.vue') },
      { path: '/about', component: () => import('@/pages/AboutPage.vue') },
      { path: '/directions', component: () => import('@/pages/DirectionsPage.vue') },
      { path: '/partners', component: () => import('@/pages/PartnersPage.vue') },
      { path: '/agenda', component: () => import('@/pages/AgendaPage.vue') },
      { path: '/contacts', component: () => import('@/pages/ContactsPage.vue') },
      { path: '/faq', component: () => import('@/pages/FaqPage.vue') },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
