<template>
  <div class="dashboard">
    <h1>{{ $t("views.dashboard.title") }}</h1>
    <template v-if="!isLoading">
      <PostCard v-for="post in posts" :key="post.id" :post="post"/>
    </template>
    <p v-else>
      {{ $t("constants.loading") }}
    </p>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue';
import { getPosts } from '@/services/postsApi';

export default {
  components: {
    PostCard,
  },
  data() {
    return {
      isLoading: true,
      posts: [],
    };
  },
  async created() {
    this.posts = await getPosts();
    this.isLoading = false;
  },
};
</script>
