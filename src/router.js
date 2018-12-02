import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = {
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home/Home.vue'),
      children: [
        {
          path: '',
          component: () => import('./pages/Home/Blog.vue'),
          children: [
            { path: '', component: () => import('./pages/Home/PostList.vue'), name: 'index' },
            { path: '/post/:id', component: () => import('./pages/Home/Post.vue'), props: true },
          ],
        },
        { path: '/categories', component: () => import('./pages/Home/Categories.vue') },

      ],
    },
    { path: '/login', component: () => import('./pages/Login.vue') },
    {
      path: '/admin',
      component: () => import('./pages/Admin/Admin.vue'),
      children: [
        { path: '/', component: () => import('./pages/Admin/BaseConfig.vue') },
        { path: 'userinfo', component: () => import('./pages/Admin/UserInfo.vue') },
        { path: 'post', component: () => import('./pages/Admin/Post.vue') },
        { path: 'categories', component: () => import('./pages/Admin/Categories.vue') },
      ],
    },
  ],
};

Vue.use(VueRouter);
const router = new VueRouter(routes);
export default router;
