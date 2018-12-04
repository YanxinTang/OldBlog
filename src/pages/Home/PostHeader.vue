<template>
    <header class="post-header">
        <h1>
            <template v-if="link">
                <router-link :to="{path: `/post/${id}`}">
                    {{title}}
                </router-link>
            </template>
            <template v-else>
                {{title}}
            </template>
            <span class="category pull-right">
                #{{category}}
            </span>
        </h1>
    </header>
</template>

<script>
export default {
  name: 'PostHeader',
  props: {
    title: String,
    category: {
      type: String,
      default: '',
    },
    link: {
      type: Boolean,
      default: false,
    },
    id: String,
  },
};
</script>

<style scoped>
    .post-header{
        padding-bottom: .5rem;
        margin-bottom: .5rem;
    }
    .category{
        color: #ccc;
        font-size: 1rem;
    }
</style>
