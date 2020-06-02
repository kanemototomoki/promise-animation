import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resetCss from 'normalize.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  resetCss,
  render: h => h(App)
}).$mount('#app')
