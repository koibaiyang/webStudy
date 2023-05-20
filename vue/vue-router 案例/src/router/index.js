import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路径数组
import pathArr from './pathArr'

// 导入需要i的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import MyUsers from '@/components/menus/MyUsers.vue'
import MyRights from '@/components/menus/MyRights.vue'
import MyGoods from '@/components/menus/MyGoods.vue'
import MyOrders from '@/components/menus/MyOrders.vue'
import MySittings from '@/components/menus/MySettings.vue'
import userDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/myhome', component: Home ,redirect: '/myhome/users', children: [
      // {path: '', component: MyUsers},
      {path: 'users', component: MyUsers},
      {path: 'rights', component: MyRights},
      {path: 'goods', component: MyGoods},
      {path: 'orders', component: MyOrders},
      {path: 'sittings', component: MySittings},
      {path: 'userInfo/:id', component: userDetail, props: true}
    ]}
  ]
})

// 挂载前置守卫
router.beforeEach(function(to, from, next){
  // console.log(to.path);
  
  // 根据路径数组内的路径进行多项判断是否需要全局前置守卫
  if(pathArr.indexOf(to.path) !== -1) {
    // console.log(localStorage.getItem('token'));
    if(localStorage.getItem('token')){
      next()
    }else{
      // this.$router.push('/login')
      next('/login')
    }
  }else {
    next()
  }
})

export default router