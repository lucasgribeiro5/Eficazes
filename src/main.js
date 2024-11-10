<<<<<<< HEAD
import './assets/tailwind.css'
import './assets/fonts.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

=======


import { createApp } from 'vue'
>>>>>>> 3ed92b723ac0d65fc8206bbf779a7532fd78812c
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
<<<<<<< HEAD
app.use(createPinia())
=======

>>>>>>> 3ed92b723ac0d65fc8206bbf779a7532fd78812c
app.mount('#app')
