/**
 * 遍历文件夹下的所有文件
 * */ 

let route = [
    {
        path: '*',
        name: '404',
        component: () => import('@/pages/home'),  // const UserDetails = () => import('./views/UserDetails') 实现路由懒加载
        meta: { title: '404', keepAlive: true }
    },
    {
        path: 'home',
        name: 'home',
        component: () => import('@/pages/home'),
        meta: { title: '首页', keepAlive: true }
    },
    {
        path: 'sort',
        name: 'sort',
        component: () => import('@/pages/sort'),
        meta: { title: '分类', keepAlive: true }
    },
    {
        path: 'shopCart',
        name: 'shopCart',
        component: () => import('@/pages/shopCart'),
        meta: { title: '购物车', keepAlive: true }
    },
    {
        path: 'mine',
        name: 'mine',
        component: () => import('@/pages/mine'),
        meta: { title: '我的', keepAlive: true }
    },
]

const modulesFiles = require.context('./', true, /\.js$/);

modulesFiles.keys().map(moduleName =>{
    const name = moduleName.replace(/^\.\/(.*)\.\w+$/, "$1");
    if(name == 'index') return
    route = [ ...route, ...require(''+moduleName+'').default ]  // 同名方法名自动过滤掉
})

export default route;