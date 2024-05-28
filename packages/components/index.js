import * as components from './src/ui'

export * from './src/ui'

export default {
  install: app => components.forEach(c => app.use(c)),
}
