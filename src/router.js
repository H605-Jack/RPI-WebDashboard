import { createWebHistory, createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'

// import HomeView from './AboutView.vue'
import AboutView from './components/router/AboutView.vue'
import HomeView from './components/router/HomeView.vue'
import SettingView from './components/router/SettingView.vue'
import Content from './components/nettools/Content.vue'
import PortScanning from './components/nettools/PortScanning.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/settings', component: SettingView },
    // PATH: /nettools
    { path: '/nettools', component: Content },
    { path: '/nettools/index.php', component: Content },
    { path: '/nettools/port-scanning.php', component: PortScanning }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})