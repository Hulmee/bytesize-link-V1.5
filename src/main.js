import './style.css'
import { createApp } from 'vue'
import { createHead } from '@unhead/vue'

import App from './App.vue'

import router from './router'

const app = createApp(App),
    head = createHead()

// createApp(App).mount('#app')
app.use(router)
app.use(head)
app.mount('#app')
