<template>
    <div class="post-list">
        <PostListItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          v-if="post.attributes.category">
        </PostListItem>
        <div class="text-center">
            <i class="el-icon-loading" :style="{visibility: loading ? 'visible' : 'hidden'}"></i>
            <span v-if="over" class="over-tips">—— 完 ——</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PostList',
  components: {
    PostListItem: () => import('./PostListItem.vue'),
  },
  data() {
    return {
      posts: [], // 博文列表
      canLoad: false, // 是否可以加载
      over: false, // 是否全部加载完成
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
    categoryId() {
      return this.$route.params.categoryId;
    }
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
      let query = null;
      console.log(this.categoryId);
      if(this.categoryId){
        const category = this.$AV.Object.createWithoutData('Categories', this.categoryId);
        const relation = category.relation('posts');
        query = relation.query();
      } else {
        query = new this.$AV.Query('Posts');
      }

      const date = this.posts.length ? this.posts[this.posts.length - 1].createdAt : new Date();
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
  beforeRouteUpdate (to, from, next) {
    console.log('asdfasdfasdfasdfasdf')
  }
};
</script>

<style scoped>
  .over-tips{
    color: #aaa;
  }
</style>
