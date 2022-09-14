import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import AppNav from '@/components/AppNav.vue'

const vApp = createApp(App)

vApp.component('AppNav', AppNav)

vApp.mount('#app')
