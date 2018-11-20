import Vue from 'vue';
import './plugins/element';
import router from './router';
import AV from './AV';

import 'element-ui/lib/theme-chalk/display.css';
import './assets/scss/style.scss';
import './assets/scss/markdown.scss';

Vue.config.productionTip = false;
Vue.use(AV);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
