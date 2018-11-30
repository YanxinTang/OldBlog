<template>
    <div class="post-list">
        <PostListItem v-for="post in posts" :key="post.id" :post="post"></PostListItem>
        <div class="text-center">
            <i class="el-icon-loading" :style="{visibility: loading ? 'visible' : 'hidden'}"></i>
            <span v-if="over" class="over-tips">—— 完 ——</span>
        </div>
    </div>
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
  name: 'PostList',
  components: { PostListItem },
  data() {
    return {
      posts: [],            // 博文列表
      canLoad: false,       // 是否可以加载
      over: false,          // 是否全部加载完成
    };
  },
  created() {
    window.addEventListener('scroll', this.loadMore);
  },
  mounted() {
    this.load();
  },
  computed: {
    loading() {
      return !this.canLoad && !this.over; // 正在加载时canLoad为false; 所有文章未加载完成，over为false;
    },
  },
  methods: {
    loadMore() {
      const el = document.documentElement;
      if (this.canLoad && el.scrollHeight - el.scrollTop <= el.clientHeight + 50) {
        this.canLoad = false;
        this.load();
      }
    },
    load() {
      const date = this.posts.length ? this.posts[this.posts.length - 1].createdAt : new Date();
      const query = new this.$AV.Query('Posts');
      query.include('category');
      query.limit(5);
      query.addDescending('createdAt');
      query.lessThan('createdAt', date);
      query.find().then((posts) => {
        if (posts.length) {
          this.posts.push(...posts);
          this.canLoad = true;
        } else {
          this.over = true;
        }
      }, (error) => {
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>
  .over-tips{
    color: #aaa;
  }
</style>
