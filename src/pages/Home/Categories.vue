<template>
  <div>
    <el-row>
      <el-col
        :span="24"
        :md="{span: 12, offset: 3}"
        v-loading="loading"
        element-loading-background="rgb(255, 255, 255, 0)">
        <ul class="category-wrapper">
          <li
            class="category"
            v-for="category in categories"
            :key="category.id" >
            <h2>
              {{ category.attributes.name }}
            </h2>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      loading: true,
      categories: [],
    };
  },
  mounted() {
    const categoriesQuery = new this.$AV.Query('Categories');

    categoriesQuery.find().then((categories) => {
      this.categories = categories;
      this.loading = false;
    }, (error) => {
      // TODO: 处理错误
      console.log(error);
    });
  },
};
</script>

<style scoped>
  ul.category-wrapper{
    list-style-type: none;
  }
  li.category {
    margin-bottom: .3rem;
  }
  li.category h2{
    color: #2d374b;
  }
</style>
