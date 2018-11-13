<template>
    <el-row>
        <el-col :span="12" :offset="6">
            <el-form size="large" label-width="80px">
                <el-form-item label="登录名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.passwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submit">确认</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>

</template>
<script>
import AV from 'leancloud-storage';

export default {
  name: 'UserInfo',
  data() {
    return {
      form: {
        username: '',
        email: '',
        passwd: '',
      },
    };
  },
  methods: {
    submit() {
      const currentUser = AV.User.current();
      currentUser.setUsername(this.form.username);
      currentUser.setPassword(this.form.passwd);
      currentUser.setEmail(this.form.email);
      currentUser.signUp()
        .then((user) => {
          console.log(user);
          // user 已转化为普通用户
        })
        .catch((error) => {
          // 异常处理
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
