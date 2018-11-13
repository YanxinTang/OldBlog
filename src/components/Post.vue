<template>
    <el-card shadow="never">
        <header>
            <h1>
                <a href="#">{{post.attributes.title}}</a>
            </h1>
        </header>
        <div class="post-body">
            {{post.attributes.content}}
        </div>
        <footer>
            <el-row>
                <el-col :span="6">
                    <i class="el-icon-date"></i>
                    {{post.createdAt|formatDate}}
                </el-col>
                <el-col :span="6" :offset="6">
                    <i class="el-icon-edit-outline"></i>

                </el-col>
            </el-row>
        </footer>
    </el-card>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object,
  },
  filters: {
    formatDate(value) {
      let date = new Date(value);
      const [year, month, day, hours, minutes, seconds] = [
        date.getFullYear(),
        date.getMonth(),
        date.getDay(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ];
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style scoped>

</style>
