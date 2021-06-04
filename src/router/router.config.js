import { BasicLayout, BlankLayout } from '@/layouts'
import BasicLayoutRouter from './basicLayout_router'
import BlankLayoutRouter from './blankLayout_router'

export default [
  {
    path: '/',
    redirect: '/index/home'
  },
  {
    path: '/index',
    name: 'index',
    component: BasicLayout,
    children: BasicLayoutRouter
  },
  {
    path: '/main',
    name: 'main',
    component: BlankLayout,
    children: BlankLayoutRouter
  }
]