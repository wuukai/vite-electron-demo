import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../Demos/HomeView.vue'
import AboutView from '../Demos/AboutView.vue'
import Index from '../Demos/index.vue'
import appIndex from '../views/appIndex.vue'

const routes = [
    {
        path: '/', 
        component: appIndex
    },
    {
        path: '/test', 
        component: Index,
        children:[
            {
                path: 'home',
                component: HomeView,
            },
            { 
                path: 'about', 
                component: AboutView 
            },
               
        ]
    },    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router