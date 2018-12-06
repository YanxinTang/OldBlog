<template>
    <el-table
            stripe
            :data="categories"
            style="width: 100%">
        <el-table-column
                prop="attributes.name"
                label="分类">
        </el-table-column>
        <el-table-column
                prop="counts"
                label="博文数">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">
                    删除
                </el-button>
            </template>
        </el-table-column>
        <template slot="append">
            <el-row class="table-appender">
                <el-form v-show="isShowForm">
                    <el-col :span="12">
                        <el-input v-model="form.name">
                        </el-input>
                    </el-col>
                    <el-col :span="8" :offset="4">
                        <el-button
                            :disabled="loading"
                            @click="submit">
                            <i class="el-icon-loading" v-if="loading"></i>
                            <span v-else>确认</span>
                        </el-button>
                        <el-button
                            @click="cancel">
                            取消
                        </el-button>
                    </el-col>
                </el-form>
                <el-col :span="24">
                    <div class="add-category" @click="showForm" v-show="!isShowForm">
                        <i class="el-icon-circle-plus-outline"></i>
                    </div>
                </el-col>
            </el-row>
        </template>
    </el-table>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      loading: false,
      categories: [],
      isShowForm: false,
      form: {
        name: '',
      },
    };
  },
  mounted() {
    const query = new this.$AV.Query('Categories');
    query.find().then((categories) => {
      this.categories = categories;
    }, (error) => {
      console.log(error);
    });
  },
  methods: {
    showForm() {
      this.isShowForm = true;
      console.log('gs');
    },
    submit() {
      this.loading = true;
      const Categories = this.$AV.Object.extend('Categories');
      const category = new Categories();
      category.set('name', this.form.name);
      // eslint-disable-next-line
      category.save().then((category) => {
        this.categories.push(category);
        this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success',
        });
      }, () => {
        this.$notify.error({
          title: '失败',
          message: '添加失败',
        });
      }).finally(() => {
        this.isShowForm = false;
        this.loading = false;
        this.form.name = '';
      });
    },
    cancel() {
      this.isShowForm = false;
    },
    handleDelete(index, row) {
      const category = this.$AV.Object.createWithoutData('Categories', row.id);
      category.destroy().then(() => {
        this.categories.splice(index, 1);
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
        });
      }, (error) => {
        console.log(error);
        this.$notify({
          title: '失败',
          message: '删除失败',
          type: 'error',
        });
      });
    },
  },
};
</script>

<style scoped>
    .table-appender{
        height: 49px;
        line-height: 49px;
    }
    .add-category {
        text-align: center;
        width: 100%;
        cursor: pointer;
    }
    .add-category:hover {
        background: #ebeef5;
    }
</style>
