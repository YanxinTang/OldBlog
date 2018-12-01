import Vue from 'vue';
import './plugins/element';
import router from './router';
import AV from './AV';

// eslint-disable-next-line
import 'element-ui/lib/theme-chalk/display.css';
import './assets/scss/style.scss';
import './assets/scss/markdown.scss';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false;
Vue.use(AV);

new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');
