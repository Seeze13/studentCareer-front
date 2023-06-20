import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/info',
            name: 'infoSearch',
            component: () => import('../views/infoSearch/index.vue'),
            children: [
                {
                    path: 'school',
                    name: 'infoSchool',
                    component: () => import('../views/infoSearch/school.vue')
                }
            ]
        }
    ]
});

export default router;
