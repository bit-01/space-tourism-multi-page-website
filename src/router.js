import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'app',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            title: 'Space Tourism'
        }
    },
    {
        name: 'destination',
        path: '/destination/',
        component: () => import('@/pages/DestinationPage.vue'),
        meta: {
            title: "ST - Destination"
        }
    },
    {
        name: 'crew',
        path: '/crew/',
        component: () => import('@/pages/CrewPage.vue'),
        meta: {
            title: "ST - Crew"
        }
    },
    {
        name: 'technology',
        path: '/technology/',
        component: () => import('@/pages/TechnologyPage.vue'),
        meta: {
            title: "ST - Technology"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;