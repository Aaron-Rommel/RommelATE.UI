import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/Logon'
import index from '../components/Index'
import backseat from "../view/Bus/backseat";
import userinfo from "../view/Base/userinfo";
import roleinfo from "../view/Base/roleinfo";
import welcome from "../view/WelCome/welcome";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: '/index/welcome',
          component: welcome,
          name: '腾讯欢迎页',
          iconCls: 'fa-qq',//图标样式class
          // hidden: true,
          meta: {
            title: '腾讯欢迎页',
           // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
          }
        },
        {
          path: '/index/backseat',
          name: 'backseat',
          component: backseat
        },
        {
          path: '/index/userinfo',
          name: 'userinfo',
          component: userinfo
        },
        {
          path: '/index/roleinfo',
          name: 'roleinfo',
          component: roleinfo
        }
      ]
    }
  ]
})
