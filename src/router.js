import Vue from 'vue';
import VueRouter from 'vue-router';


import Home from './pages/Home/Home.vue';
import Blog from './pages/Home/Blog.vue';
import PostList from './pages/Home/PostList.vue';
import Categories from './pages/Home/Categories.vue';
import HomePost from './pages/Home/Post.vue';

import Admin from './pages/Admin/Admin.vue';
import Login from './pages/Login.vue';

import UserInfo from './pages/Admin/UserInfo.vue';
import BaseConfig from './pages/Admin/BaseConfig.vue';
import Post from './pages/Admin/Post.vue';
import AdminCategoires from './pages/Admin/Categories.vue';

const routes = {
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'blog',
          component: Blog,
          children: [
            { path: '', component: PostList },
            { path: '/post/:id', component: HomePost, props: true },
          ],
        },
        { path: '/categories', component: Categories },

      ],
    },
    { path: '/login', component: Login },
    {
      path: '/admin',
      component: Admin,
      children: [
        { path: '/', component: BaseConfig },
        { path: 'userinfo', component: UserInfo },
        { path: 'post', component: Post },
        { path: 'categories', component: AdminCategoires },
      ],
    },
  ],
};

Vue.use(VueRouter);
const router = new VueRouter(routes);
export default router;
