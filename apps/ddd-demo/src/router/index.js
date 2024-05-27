import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import routes from '~pages'

function createRouterFactory() {
  return createRouter({
    history: createWebHistory(),
    routes: setupLayouts(routes),
  })
}

const router = createRouterFactory()

// router.beforeEach(async (to, from, next) => {
// });

// router.afterEach(() => {
// });

export function resetRouter() {
  const newRouter = createRouterFactory()
  router.matcher = newRouter.matcher // reset router
}

router.$addRoutes = (params) => {
  resetRouter()
  router.addRoutes(params)
}

window.router = router

export default router
