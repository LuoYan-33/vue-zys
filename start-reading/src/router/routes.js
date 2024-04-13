const routes = [
    {
        path: '/home',
        name: 'home',
        title: '全部作品',
        isHide: false,
        component: import('@/views/home.vue')
    },
    {
        path: '/ranking',
        name: 'ranking',
        title: '排行',
        isHide: false,
        component: import('@/views/home.vue')
    },
    {
        path: '/complete',
        name: 'complete',
        title: '完本',
        isHide: false,
    },
    {
        path: '/free',
        name: 'free',
        title: '免费',
        isHide: false,
    },
    {
        path: '/creator',
        name: 'creator',
        title: '作家专区',
        isHide: false,
    },
    {
        path: '/search',
        name: 'search',
        title: '搜索',
        isHide: false,
    },
    {
        path: '/girl',
        name: 'girl',
        title: '女生网',
        isHide: false,
    },
]
const whiteRoutes=["login","register"]
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
    {
        path: '/login',
        name: 'login',
        title: '登录',
        isHide: true,
        component: import('@/views/login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        title: '404',
        isHide: true,
        component: import('@/components/404/404.vue')
    }
]
export {rootRoutes, routes,whiteRoutes}