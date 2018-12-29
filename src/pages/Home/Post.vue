<template>
    <el-card shadow="never" class="post">
        <PostHeader
          :title="post.attributes.title"
          :category="post.attributes.category.attributes.name"
        ></PostHeader>
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
import PostHeader from './PostHeader.vue';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'

export default {
  name: 'Post',
  props: {
    id: {
      type: String,
    },
  },
  components: {
    PostHeader,
  },
  data() {
    return {
      post: {
        attributes: {
          content: '',
          category: {
            attributes: {
              name: '',
            },
          },
        },
      },
    };
  },
  computed: {
    content() {
      Marked.setOptions({
        highlight(code, lang) {
          return Prism.highlight(code, Prism.languages[lang], lang);
        }
      });
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
      query.include('category');
      query.get(id).then((post) => {
        this.post = post;
      }, (error) => {
        // 异常处理
        console.log(error);
      });
    },
  },
};
</script>

<style scoped>

</style>
