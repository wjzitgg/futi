import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
 // 重定向 redirect
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/welcome'
     
    // },
    {
      path: '/',
      component: resolve => require(['@/components/home.vue'], resolve),
      meta: { title: "模板" },
      children: [
        {
          path: '/welcome',
          component: resolve => require(['@/components/welcome.vue'], resolve),
          meta: { title: "系统首页" }
        },
      ]
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve),
      meta: { title: "登录" }
    },
  ]
})
