// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// 使用muse主题
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

MuseUI.theme.use('dark')
// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
// vm.run()
