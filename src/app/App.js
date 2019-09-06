import Vue from 'vue'

function App ({ Shell, Plugins, ...options }) {
  return new Vue({
    render: h => h(Shell),
    ...Plugins.install(Vue),
    ...options
  })
    .$mount('#app')
}

export default App
