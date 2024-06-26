import { createWebHistory, createRouter } from "vue-router";
import TestPage from '@/pages/TestPage.vue';
import HomePage from '@/pages/HomePage.vue';
import TestBug from '@/pages/TestBug.vue';

const routes = [
    {
        path: "/home",
        name: "TestPage",
        component: TestPage,
    },
    {
        path: "/test",
        name: "TestBug",
        component: TestBug,
    },
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;