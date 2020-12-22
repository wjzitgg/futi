import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
 // 重定向 redirect
export default new Router({
  routes: [
   
    {
      path: '/',
      component: resolve => require(['@/components/home.vue'], resolve),
      meta: { title: "模板" },
      // children: [
      //   {
      //     path: '/welcome',
      //     component: resolve => require(['@/components/welcome.vue'], resolve),
      //     meta: { title: "系统首页" }
      //   },
      // ]
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login.vue'], resolve),
      meta: { title: "登录" }
    },
    {
          path: '/welcome',
          component: resolve => require(['@/components/welcome.vue'], resolve),
          meta: { title: "系统首页" },
      children: [
                {
                  path: '/',
                  redirect: '/monitoring'
                
                },
                {
                  path: '/monitoring',
                  component: resolve => require(['@/components/monitoring.vue'], resolve),
                  meta: { title: "状态监控" }
                },
                {
                  path: '/tendency',
                  component: resolve => require(['@/components/tendency.vue'], resolve),
                  meta: { title: "趋势分析" }
                },
                {
                  path: '/fault',
                  component: resolve => require(['@/components/fault.vue'], resolve),
                  meta: { title: "故障报警" }
                },
                {
                  path: '/shake',
                  component: resolve => require(['@/components/shake.vue'], resolve),
                  meta: { title: "震动分析" }
                },
                {
                  path: '/setting',
                  component: resolve => require(['@/components/setting.vue'], resolve),
                  meta: { title: "预警设置" }
                },
              ]
    },
  ]
})
