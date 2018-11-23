<template>
    <el-card shadow="never" class="post">
        <header>
            <h1>
                <router-link :to="{path: `/post/${post.id}`}">
                    {{post.attributes.title}}
                </router-link>
            </h1>
        </header>
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

export default {
  name: 'PostListItem',
  props: {
    post: Object,
  },
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
