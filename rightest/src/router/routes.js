const routes = [
    {
        path: '/home',
        name: 'home',
        title: '首页',
        isHide: false,
        component: import('@/views/home.vue')
    },
    {
        path: '/download',
        name: 'download',
        title: '下载最右',
        isHide: false,
        component: import('@/views/home.vue')
    },
    {
        path: '/creator-h',
        name: 'creator',
        title: '创作者中心',
        isHide: false,
    },
]
const rootRoutes = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: import('@/components/layout/index.vue'),
        children: routes
    },
    {
        path: '/creator',
        name: 'creator-n',
        component: import('@/views/creatorCenter.vue')
    },
    {
        path: '/creator-home/:info',
        name: 'creatorHome',
        component: import('@/views/creatorHome.vue')
    },
]
export {rootRoutes, routes}