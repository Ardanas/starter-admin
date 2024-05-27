import { createPinia } from 'pinia'

// Setup Pinia
// https://pinia.vuejs.org/
export function install({ app }) {
  const pinia = createPinia()
  app.use(pinia)
}
