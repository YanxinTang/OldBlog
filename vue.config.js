module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/Blog/'
    : '/',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        pages: '@/pages',
      },
    },
  },
};
