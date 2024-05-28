import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const app = createApp(App)

Object.values(import.meta.glob('./plugins/**', { eager: true })).forEach((i) => {
  i.install({ app, router })
})

app.use(router).mount('#app')
