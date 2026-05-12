import { createApp, nextTick } from 'vue'
import { createRouter } from 'vue-router'
import { router } from './router'
//import './style/style.css'
import App from './App.vue'

const el = document.getElementById("app")
if (el) {
    createApp(App).use(router).mount(el);
    nextTick(() => {
        document.body.classList.remove("shell-loading");
    })
}

// router instance
