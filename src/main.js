import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter, createWebHistory } from 'vue-router'

let app = null
function render (props = {}) {
  const { container } = props
  app = createApp(App)
  const router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : process.env.BASE_URL),
    routes
  })
  app.use(router).mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  render(props)
}
export async function unmount () {
  app.unmount()
  app = null
}
