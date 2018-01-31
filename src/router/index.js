import Vue from 'vue'
import Router from 'vue-router'
import CloudPlatform from '../components/CloudPlatform'
import NewProduct from '../components/NewProduct'
import NewModule from '../components/NewModule'
import AllProject from '../components/AllProject'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/CloudPlatform',
      name: 'CloudPlatform',
      component: CloudPlatform
    },{
      path:'/NewProduct',
      component:NewProduct
    },
    {
      path:'/NewModule',
      component:NewModule
    },
    {
      path:'/AllProject',
      component:AllProject
    },{
    path: '*',
      redirect:'CloudPlatform'
    }
  ],
  linkActiveClass:'active' // 修改默认激活class名称
})
