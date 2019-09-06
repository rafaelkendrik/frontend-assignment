import Vuex from 'vuex'

const requireVueModules = require.context('@/', true, /data$/)

const modules = requireVueModules
  .keys()
  .reduce((acc, filename) => {
    const moduleName = filename.split('/')[1]
    const module = requireVueModules(filename)

    acc[moduleName] = module.default || module
    return acc
  }, {})

const strict = process.env.NODE_ENV !== 'production'

const install = Vue => {
  Vue.use(Vuex)

  const store = new Vuex.Store({
    strict,
    modules
  })

  return { store }
}

export default { install }
