import { createWebHistory, createRouter } from 'vue-router';
import Main from './layouts/Main.vue';
import Home from './pages/Home.vue';
const history = createWebHistory();
const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                name: 'home',
                component: () => import('./pages/Home.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('./pages/About.vue'),
            },
            {
                path: '/experience',
                name: 'experience',
                component: () => import('./pages/Experience.vue'),
            },
            {
                path: '/works',
                name: 'works',
                component: () => import('./pages/Works.vue'),
            },
            {
                path: '/contact',
                name: 'contact',
                component: () => import('./pages/Contact.vue'),
            },
        ],
    },
];
const router = createRouter({ history, routes });
export default router;
