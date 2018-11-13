import Vue from 'vue';
import './plugins/element';
import router from './router';
import AV from './AV';

import './assets/scss/style.scss';

Vue.config.productionTip = false;
Vue.use(AV);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
