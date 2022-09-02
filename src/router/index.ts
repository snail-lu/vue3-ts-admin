import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router';
import { store } from '@/store/index';
import Layout from '../components/layout/index.vue';
import { adminRoutes } from './permission';
const routes = [
    {
        path: '/',
        component: Layout,
        meta: {
            title: '首页',
            icon: 'House'
        },
        children: [
            {
                path: '',
                name: 'Home',
                hidden: true,
                component: () => import('@/views/Home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/LoginView.vue'),
        hidden: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes.concat(adminRoutes)
});

// 导航守卫
router.beforeEach((to, from, next) => {
    console.log(to, 'to');
    // 根据登录状态决定路由方向
    const userInfo = store.state.userInfo;
    if (userInfo || to.path === '/login') {
        next();
    } else {
        // 未登录用户进入到登录页
        next({ path: 'login' });
    }
});

export default router;
