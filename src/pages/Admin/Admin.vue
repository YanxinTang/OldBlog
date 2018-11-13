<template>
    <el-container>
        <el-header>
            <el-menu
                default-active="/admin"
                mode="horizontal"
                @select="handleSelect"
                :router="true"
                menu-trigger="click">
                <el-menu-item index="/admin">基础设置</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="/admin/post">写博客</el-menu-item>
                    <el-menu-item index="/admin/categories">整理分类</el-menu-item>
                </el-submenu>
                <el-menu-item
                    class="pull-right"
                    index="/logout"
                    @click="onLogOut">
                    退出
                </el-menu-item>
                <el-menu-item class="pull-right" index="/admin/userinfo">个人信息</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <el-row>
                <el-col :span="16" :offset="4" :xs="{span: 24, offset: 0}">
                    <el-card shadow="never">
                        <router-view></router-view>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import AV from 'leancloud-storage';

export default {
  name: 'Admin',
  beforeRouteEnter(to, from, next) {
    const currentUser = AV.User.current();
    if (currentUser) {
      next();
    } else {
      next('/login');
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onLogOut() {
      this.$AV.User.logOut();
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
    .el-header {
        padding: 0;
    }

    .el-menu {
        padding: 0 80px;
    }
</style>
