import { createWebHistory, createRouter } from 'vue-router';
import Main from './layouts/Main.vue';
import Home from './pages/Home.vue';
import AnotherPage from './pages/AnotherPage.vue';
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
                component: Home,
            },
            {
                path: '/another-page',
                name: 'another-page',
                component: AnotherPage,
            },
        ],
    },
];
const router = createRouter({ history, routes });
export default router;
