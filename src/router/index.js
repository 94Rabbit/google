import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/layout/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/components/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }]
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: resolve => require(['@/components/ContactUs'], resolve),
      meta: {
        title: '联系我们'
      }
    },
  ]
})
