import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router