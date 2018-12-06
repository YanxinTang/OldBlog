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
      // eslint-disable-next-line
      categories.forEach(r => r.name = r.attributes.name);
      return categories;
    },
  },
  methods: {
    submit() {
      const Posts = this.$AV.Object.extend('Posts');
      const post = new Posts();
      const category = this.getCategoryObject(this.form.category.pop());
      post.set('title', this.form.title);
      post.set('category', category);
      post.set('content', this.form.content);
      post.save().then(() => {

        const relation = category.relation('posts');
        relation.add(post);
        category.save();
        
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
            // eslint-disable-next-line
            form[key] = 0;
            break;
          case 'object':
            if (Array.isArray(form[key])) {
              // eslint-disable-next-line
              form[key] = [];
            } else {
              // eslint-disable-next-line
              form[key] = {};
            }
            break;
          default:
            // eslint-disable-next-line
            form[key] = '';
        }
      });
    },
  },
};
</script>

<style scoped>

</style>
