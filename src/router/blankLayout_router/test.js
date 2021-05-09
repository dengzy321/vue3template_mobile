export default [
    {
        path: '/main/goodsDetail',
        name: 'goodsDetail',
        component: () => import('@/pages/goodsDetail'),
        meta: { title: '商品详情', keepAlive: true }
    },
]