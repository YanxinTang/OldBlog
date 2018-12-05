<template>
    <el-container>
        <el-header>
            <Logo></Logo>
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
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-main>
    </el-container>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'ListPost',
  components: { Logo },
};
</script>

<style scoped>
    .el-header{
        background: #FFF;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 1px 6px 1px #efefef;
    }
    @media (min-width: 1000px){
        .el-header{
            padding-left: 100px;
            padding-right: 100px;
        }
    }
</style>
