module.exports = {
  baseUrl: '/',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        pages: '@/pages',
      },
    },
  },

  pwa: {
    name: 'Yanxin\'s Blog',
    themeColor: '#FFFFFF',
    msTileColor: '#51D2FF',
  },
};
