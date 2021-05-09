export default [
    {
        path: '/index/sort',
        name: 'sort',
        component: () => import('@/pages/sort'),
        meta: { title: '分类', keepAlive: true }
    },
]