<template>
    <el-row>
        <el-col :md="{span: 12, offset:3 }" :span="24" class="left-panel">
            <!--<PostListItem v-for="post in posts" :post="post"></PostListItem>-->
            <router-view></router-view>
        </el-col>
        <el-col :span="5" :offset="1" class="hidden-sm-and-down">
            <el-card shadow="never">
                <el-row class="profile-links">
                    <el-col :span="12">
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
</template>

<script>
export default {
  name: 'Blog',
};
</script>

<style scoped>
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
