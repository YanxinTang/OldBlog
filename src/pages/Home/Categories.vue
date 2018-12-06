<template>
  <div>
    <el-card 
      shadow="never"
      v-for="category in categories"
      :key="category.id">
      <h3>
        <router-link :to="{name: 'category', params: {categoryId: category.id}}">
          #{{ category.attributes.name }}
        </router-link>
      </h3>
    </el-card>
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
