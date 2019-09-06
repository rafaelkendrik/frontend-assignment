import VueRouter from 'vue-router'

const vueRoutes = require.context('@/modules', true, /routes.js$/)

const loadRoutesFromFiles = () =>
  vueRoutes
    .keys()
    .map(vueRoutes)
    .reduce((acc, { default: routes }) => ([...acc, ...routes]), [])

const routes = loadRoutesFromFiles()

const install = Vue => {
  Vue.use(VueRouter)

  const router = new VueRouter({
    mode: 'history',
    routes
  })

  return { router }
}

export default { install }
