<template>
    <el-card shadow="never">
        <header>
            <h1>
                <router-link :to="{path: `/post/${post.id}`}">{{post.attributes.title}}</router-link>
            </h1>
        </header>
        <div class="post-body">
            {{post.attributes.content|thumb}}
        </div>
        <footer>
            <el-row>
                <el-col :span="24" :md="{span:6}">
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
      return value.substring(0, 255);
    },
  },
};
</script>

<style scoped>
    a{
        color: #ff7e79;
    }
    a:link, a:visited{
        color: #ff7e79;
    }
    a:hover{
        border: #ff7e79;
    }
    .post-body{
        padding-top: 20px;
        padding-bottom: 20px;
    }
    footer{
        color: #666;
    }
</style>
