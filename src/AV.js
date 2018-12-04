import AV from 'leancloud-storage';

const APP_ID = process.env.VUE_APP_APP_ID;
const APP_KEY = process.env.VUE_APP_APP_KEY;

export default {
  install(Vue) {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
    });
    Vue.prototype.$AV = AV;
  },
};
