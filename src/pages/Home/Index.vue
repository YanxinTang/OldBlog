<template>
    <el-row>
        <el-col :span="12" :offset="3">
            <Post v-for="post in posts" :post="post"></Post>
        </el-col>
        <el-col :span="5" :offset="1">
            <el-card shadow="never">

            </el-card>
        </el-col>
    </el-row>
</template>

<script>
import Post from 'components/Post.vue';

export default {
  name: 'ListPost',
  components: { Post },
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
