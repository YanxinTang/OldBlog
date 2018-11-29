<template>
    <el-form
        label-width="80px"
        size="large">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="分类">
            <el-cascader
              :options="categories"
              :props="{value: 'id', label:'name'}"
              v-model="form.category">
            </el-cascader>
        </el-form-item>
        <el-form-item>
            <el-upload
                action="https://sm.ms/api/upload"
                list-type="picture-card"
                :http-request="upload"
                :on-progress="uploadProgress"
                :on-success="uploadSuccess">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </el-form-item>
        <el-form-item label="内容">
            <el-input
              v-model="form.content"
              type="textarea"
              :rows="20"
              placeholder="又是元气满满的一天:)"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">确认</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        title: '',
        category: [],
        content: '',
      },
      categoriesData: [],
    };
  },
  mounted() {
    const query = new this.$AV.Query('Categories');
    query.find().then((categories) => {
      this.categoriesData = categories;
    }, (error) => {
      console.log(error);
    });
  },
  computed: {
    categories() {
      const categories = this.categoriesData;
      categories.forEach(r => r.name = r.attributes.name);
      return categories;
    },
  },
  methods: {
    submit() {
      const Posts = this.$AV.Object.extend('Posts');
      const post = new Posts();
      post.set('title', this.form.title);
      post.set('category', this.getCategoryObject(this.form.category.pop()));
      post.set('content', this.form.content);
      post.save().then(() => {
        this.cleanForm(this.form);
        this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success',
        });
      }, () => {
        console.log('error');
      });
    },
    getCategoryObject(id) {
      return this.categoriesData.find(category => category.id === id);
    },
    cleanForm(form) {
      Object.keys(form).forEach((key) => {
        switch (typeof form[key]) {
          case 'number':
            form[key] = 0;
            break;
          case 'object':
            if (Array.isArray(form[key])) {
              form[key] = [];
            } else {
              form[key] = {};
            }
            break;
          default:
            form[key] = '';
        }
      });
    },
    upload(params) {
      console.log(params.onProgress)
      const action = 'https://sm.ms/api/upload';
      const form = new FormData();
      form.append('smfile', params.file);
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("progress", params.onProgress, false);
      xhr.addEventListener("load", params.onSuccess, false);
      xhr.open('POST', action, true);
      xhr.send(form);
    },
    uploadProgress() {
      console.log('test')
    },
    uploadSuccess() {
      console.log('success')
    }
  },
};
</script>

<style scoped>

</style>
