<template>
    <el-container>
        <el-header></el-header>
        <el-main>
            <el-form label-position="top">
                <el-row>
                    <el-col :span="8" :offset="8">
                        <el-form-item label="用户">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :offset="8">
                        <el-form-item label="密码">
                            <el-input type="password" v-model="form.password"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4" :offset="10">
                        <el-button type="primary" @click="submit">登陆</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </el-main>
    </el-container>
</template>

<script>
import AV from 'leancloud-storage';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  beforeRouteEnter(to, from, next) {
    const currentUser = AV.User.current();
    if (currentUser) {
      next('/admin');
    } else {
      next();
    }
  },
  methods: {
    submit() {
      AV.User.logIn(this.form.username, this.form.password)
        .then(() => {
          this.$router.push('admin');
        }, (error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
    button{
        width: 100%;
    }
</style>
