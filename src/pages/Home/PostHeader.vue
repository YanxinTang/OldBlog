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
        </h1>
    </header>
</template>

<script>
export default {
  name: 'PostHeader',
  props: {
    title: String,
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
        padding-bottom: 2rem;
        border-bottom: 1px solid #eee;
        margin-bottom: .5rem;
    }
</style>
