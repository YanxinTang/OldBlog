<template>
    <el-container>
        <el-header>
            <el-menu
                class="pull-right"
                mode="horizontal"
                :router="true"
                default-active="/">
                <el-menu-item
                    index="/">
                    Blog
                </el-menu-item>
                <el-menu-item index="/categories">分类</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
  export default {
    name: 'ListPost'
  };
</script>

<style scoped>
    .el-header{
        background: #FFF;
    }
</style>
