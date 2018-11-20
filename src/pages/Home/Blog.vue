<template>
    <el-row>
        <el-col :md="{span: 12, offset:3 }" :span="24" class="left-panel">
            <!--<PostListItem v-for="post in posts" :post="post"></PostListItem>-->
            <router-view></router-view>
        </el-col>
        <el-col :span="5" :offset="1" class="hidden-sm-and-down">
            <el-card shadow="never">

            </el-card>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'Blog'
  };
</script>

<style scoped>
    .left-panel{
        min-height: 36px;
    }
</style>
