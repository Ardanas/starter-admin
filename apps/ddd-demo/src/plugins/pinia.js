import { createPinia } from 'pinia'

// Setup Pinia
// https://pinia.vuejs.org/
export const install = ({ app }) => {
  const pinia = createPinia()
  app.use(pinia)
}