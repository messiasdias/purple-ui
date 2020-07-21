import './assets'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import meta from './meta'

Vue.use(VueMeta, {refreshOnceOnNavigation: true})
new Vue({
  router,
  render: h => h(App,{props: meta})
}).$mount('#app')
