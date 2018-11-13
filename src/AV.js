import AV from 'leancloud-storage';

const APP_ID = 'w2VxjDPyB9L8hFsL50sS7gwT-gzGzoHsz';
const APP_KEY = '5yh0o1MBPflslXRjsWtjxQIx';

export default {
  install(Vue, options) {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
    });
    Vue.prototype.$AV = AV;
  },
};
