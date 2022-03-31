import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const req = require.context('@/components/', true, /\.(js|vue)$/i)
req.keys().map(key => {
  if (!(req(key).default || {}).name) {
    return
  }
  Vue.component(req(key).default.name, req(key).default)
})
const pages = require.context('@/pages/', true, /\.(js|vue)$/i)
pages.keys().map(key => {
  if (!(pages(key).default || {}).name) {
    return
  }
  Vue.component(pages(key).default.name, pages(key).default)
})
const svgReq = require.context('@/assets/svg/', true, /\.(svg)$/i)
svgReq.keys().map(key => {
  Vue.component(key.slice(2, -4), svgReq(key))
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
