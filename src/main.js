import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import router from '@/router'

router.beforeEach((to, from, next) => {
    document.title = to.meta.number + "  " + to.meta.title
    window.scrollTo(0,0)
    next()
})


const vApp = createApp(App)

vApp.use(router);

vApp.mount('#app')
