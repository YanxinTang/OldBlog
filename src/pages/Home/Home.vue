<template>
    <el-container>
        <el-header>
            <div id="logo">
                <router-link :to="{name: 'index'}">_._</router-link>
            </div>
            <el-menu
                class="pull-right"
                mode="horizontal"
                :router="true"
                default-active="/">
                <el-menu-item index="/">Blog</el-menu-item>
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
  name: 'ListPost',
};
</script>

<style scoped>
    #logo{
        display: inline-block;
        font-size: 42px;
        width: 60px;
        height: 60px;
        text-align: center;
    }
    .el-header{
        background: #FFF;
    }
    @media (min-width: 1000px){
        .el-header{
            padding-left: 100px;
            padding-right: 100px;
        }
    }
</style>
