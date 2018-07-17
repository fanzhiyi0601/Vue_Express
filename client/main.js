// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
import {neon} from 'vue-canvas-effect'
Vue.component(neon.name, neon)
Vue.use(MuseUI)
theme.use('dark')
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
// vm.run()
