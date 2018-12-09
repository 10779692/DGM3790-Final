import Vue from 'vue'
import Router from 'vue-router'
import AppTestimonial from '@/AppTestimonial'
import AppContact from '@/AppContact'
import AppServices from '@/AppServices'
import AppPortfolio from '@/AppPortfolio'
import AppAbout from '@/AppAbout'
import AppHome from '@/AppHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/services',
      name: 'AppServices',
      component: AppServices
    },
    {
      path: '/portfolio',
      name: 'AppPortfolio',
      component: AppPortfolio
    },
    {
      path: '/about',
      name: 'AppAbout',
      component: AppAbout
    },
    {
      path: '/testimonial',
      name: 'AppTestimonial',
      component: AppTestimonial
    },
    ]
})
