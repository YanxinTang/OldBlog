<template>
    <el-container>
        <el-header>
            <Logo></Logo>
            <el-menu
                class="pull-right"
                mode="horizontal"
                :router="true"
                :default-active="$route.path">
                <el-menu-item index="/"><i class="el-icon-document"></i>Blog</el-menu-item>
                <el-menu-item index="/categories"><i class="el-icon-menu"></i>分类</el-menu-item>
                <el-menu-item index="/archives"><i class="el-icon-date"></i>归档</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <el-row>
                <el-col :md="{span: 12, offset:3 }" :span="24" class="left-panel">
                    <router-view :key="$route.fullPath"></router-view>
                </el-col>
                <el-col :span="5" :offset="1" class="hidden-sm-and-down">
                    <el-card shadow="never">
                        <el-row class="profile-links">
                            <el-col :span="12">
                                <router-view name="sidebar"></router-view>
                                <a href="https://github.com/YanxinTang" target="_blank">
                                    <i class="iconfont icon-github"></i>
                                </a>
                            </el-col>
                        </el-row>
                        <div class="divider"></div>
                        <h5 class="text-center copyright">Leancloud & Vue</h5>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'ListPost',
  components: { Logo },
  beforeRouteUpdate(to, from, next) {
    next();
  },
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
    .left-panel{
        min-height: 36px;
    }
    .copyright{
        color: #C0C4CC;
    }
    .profile-links i{
        font-size: 24px;
    }
    .profile-links a:hover{
        color: #2d374b;
    }
</style>
