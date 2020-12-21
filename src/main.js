// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(ElementUI);
import echarts from "echarts";
import { get, post, del, put } from "@/api/api.js"


Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$del = del;
Vue.prototype.$put = put;


// axios.defaults.baseURL = 'http://escalator.linbd.top/';
axios.defaults.baseURL = '/api';


// request拦截器
axios.interceptors.request.use(
  config => {
    // console.log(config);
    config.headers['Content-Type'] = 'application/json'
    let token = window.localStorage.getItem('token')
    if (token) {
      // console.log(token);
      config.headers['token'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  
  if(!token && to.path !== '/login'){
      next('/login');
  }else{
      next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
