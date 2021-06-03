import { BasicLayout, BlankLayout } from '@/layouts'
import basicLayout_router from './basicLayout_router'
import blankLayout_router from './blankLayout_router'


export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/index/home',
    children: [
      {
        path: '*',
        name: '404',
        component: () => import('@/pages/home'),  // const UserDetails = () => import('./views/UserDetails') 实现路由懒加载
        meta: { title: '404', keepAlive: true }
      },
      {
        path: '/index/home',
        name: 'home',
        component: () => import('@/pages/home'),
        meta: { title: '首页', keepAlive: true }
      },
      {
        path: '/index/sort',
        name: 'sort',
        component: () => import('@/pages/sort'),
        meta: { title: '分类', keepAlive: true }
      },
      {
        path: '/index/shopCart',
        name: 'shopCart',
        component: () => import('@/pages/shopCart'),
        meta: { title: '购物车', keepAlive: true }
      },
      {
        path: '/index/mine',
        name: 'mine',
        component: () => import('@/pages/mine'),
        meta: { title: '我的', keepAlive: true }
      },
      ...basicLayout_router
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: BlankLayout,
    children: [
      ...blankLayout_router
    ]
  }
]