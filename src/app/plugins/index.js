import router from './router'
import store from './store'

const Plugins = [
  router,
  store
]

const install = Vue => (
  Plugins
    .reduce((acc, Plugin) => (
      Object.assign(acc, Plugin.install(Vue)),
      acc
    ), {})
)

export default {
  install
}
