<template>
  <div id="app">
    <app-nav />
    <router-view />
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  name: 'App',
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">
.position-right {
  position: absolute;
  right: 30px;
  bottom: 30px;
}
.position-left {
  position: absolute;
  left: 30px;
  bottom: 30px;
}
</style>
