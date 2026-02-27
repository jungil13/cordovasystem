import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import ContactView from '../views/ContactView.vue'
import PaymentView from '../views/PaymentView.vue'
import RequestServiceView from '../views/RequestServiceView.vue'
import AuthView from '../views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/contact', name: 'contact', component: ContactView },
    { path: '/payment', name: 'payment', component: PaymentView },
    { path: '/request-service', name: 'request-service', component: RequestServiceView },
    { path: '/login', name: 'login', component: AuthView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router

