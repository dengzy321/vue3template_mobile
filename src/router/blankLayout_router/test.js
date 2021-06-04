export default [
    {
        path: '/main/canvas',
        name: 'canvas',
        component: () => import('@/pages/canvas'),
        meta: { title: 'canvas', keepAlive: true }
    },
]