import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'app',
        component: () => import('@/pages/HomePage.vue'),
        meta: {
            number: "00",
            title: 'Space Tourism'
        }
    },
    {
        name: 'destination',
        path: '/destination/',
        component: () => import('@/pages/DestinationPage.vue'),
        meta: {
            number:"01",
            title: "Pick Your Destination"
        }
    },
    {
        name: 'crew',
        path: '/crew/',
        component: () => import('@/pages/CrewPage.vue'),
        meta: {
            number: "02",
            title: "Meet Your Crew"
        }
    },
    {
        name: 'technology',
        path: '/technology/',
        component: () => import('@/pages/TechnologyPage.vue'),
        meta: {
            number: "03",
            title: "Space Launch 101"
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;