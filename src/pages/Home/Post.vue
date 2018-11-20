<template>
    <el-card shadow="never" class="post">
        <header>
            <h1>
                {{post.attributes.title}}
            </h1>
        </header>
        <div class="post-body" v-html="content">
        </div>
        <footer>
            <el-row>
                <el-col :span="24">
                    <i class="el-icon-date"></i>
                    {{post.createdAt|formatDate}}
                </el-col>
            </el-row>
        </footer>
    </el-card>
</template>

<script>
import dayjs from 'dayjs';
import Marked from 'marked';

export default {
  name: 'Post',
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      post: {
        attributes: {
          content: ''
        },
      },
    };
  },
  computed: {
    content() {
      return Marked(this.post.attributes.content);
    },
  },
  mounted() {
    this.getPost(this.id);
  },
  filters: {
    formatDate(value) {
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
    },
  },
  methods: {
    getPost(id) {
      const query = new this.$AV.Query('Posts');
      query.get(id).then((post) => {
        console.log(post);
        this.post = post;
      }, (error) => {
        // 异常处理
      });
    },
  },
};
</script>

<style scoped>

</style>
