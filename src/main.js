import './assets'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import meta from './meta'
new Vue({
  router,
  render: h => h(App,{props: meta}),
}).$mount('#app')
