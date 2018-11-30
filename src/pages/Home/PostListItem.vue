<template>
    <el-card shadow="never" class="post">
        <PostHeader
            :title="post.attributes.title"
            :id="post.id"
            :link="true"
            :category="post.attributes.category.attributes.name">
        </PostHeader>
        <div class="post-body">
            <p>{{post.attributes.content|thumb}}</p>
        </div>
        <footer>
            <el-row>
                <el-col :span="24" :md="{span:12}">
                    <i class="el-icon-date"></i>
                    {{post.createdAt|formatDate}}
                </el-col>
            </el-row>
        </footer>
    </el-card>
</template>

<script>
import dayjs from 'dayjs';
import PostHeader from './PostHeader.vue';

export default {
  name: 'PostListItem',
  props: {
    post: {
      type: Object,
      default: {
        attributes: {
          category: {
            attributes: {
              name: '',
            },
          },
        },
      },
    },
  },
  components: { PostHeader },
  filters: {
    formatDate(value) {
      return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
    },
    thumb(value) {
      let thumb = '';
      if (value.length > 255) {
        thumb = `${value.substring(0, 255).replace(/[*\-=]/g, '')}...`;
      } else {
        thumb = value.replace(/[*\-=]/g, '');
      }
      return thumb;
    },
  },
};
</script>

<style scoped>
    a:link, a:visited{
        color: #303133;
    }
    a:hover{
        color: #ff7e79;
    }
    .post-body{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    footer{
        color: #666;
    }
</style>
