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
        component: import('@/views/free.vue')
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
        path: '/detail/:title',
        name: 'detail',
        isHide: true,
        component: import('@/views/detail.vue')
    },
    {
        path: '/register',
        name: 'register',
        isHide: true,
        component: import('@/views/register.vue')
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