<template>
    <div class="post-list">
        <PostListItem v-for="post in posts" :key="posts.id" :post="post"></PostListItem>
    </div>
</template>

<script>
import PostListItem from './PostListItem.vue';

export default {
  name: 'PostList',
  components: { PostListItem },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    const query = new this.$AV.Query('Posts');
    query.limit(10);
    query.addDescending('createdAt');
    query.find().then((posts) => {
      this.posts = posts;
    }, (error) => {
      console.log(error);
    });
  },

};
</script>

<style scoped>

</style>
