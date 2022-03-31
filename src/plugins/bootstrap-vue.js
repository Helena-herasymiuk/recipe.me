import Vue from 'vue';

import { BootstrapVue, BIcon, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);

Vue.component('BIcon', BIcon)