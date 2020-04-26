<template>
  <div class="post-card">
    <span class="post-card--title">{{ post.title }}</span>
    <div class="post-card--content">{{ post.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
  .post-card {
    width: 300px;
    min-height: 150px;
    margin: 16px auto 16px auto;
    padding: 16px;
    border: solid 1px $color-gray;
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.01);
      box-shadow: $box-shadow;
    }
    &--title {
      font-size: $font-size-big;
      margin-top: 0.5em;
      margin-bottom: 0.3em;
    }
    &--content {
      padding: 1em;
    }
  }
</style>
