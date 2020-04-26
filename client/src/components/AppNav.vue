<template>
<div class="menu">
  <router-link to="/">
    {{$t("components.nav.home")}}
  </router-link>
  <router-link v-if="loggedIn" to="/dashboard">
  {{$t("components.nav.dashboard")}}
  </router-link>
  <router-link v-if="!loggedIn" to="/login" class="button">
    {{$t("components.nav.login")}}
  </router-link>
  <load-button v-else name="button" type="secondary" @click="logout">
    {{$t("components.nav.logout")}}
  </load-button>
</div>
</template>

<script>
import { authComputed } from '@/store/helpers';
import LoadButton from '@/components/LoadButton.vue';

export default {
  name: 'AppNav',
  components: {
    LoadButton,
  },
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push({ name: 'home' });
      });
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0.2em 1em;
  box-shadow: $box-shadow;
  a {
    font-weight: font-weight;
    color: $color-spruce;
    margin: auto 0.8em auto 0.4em;
    text-decoration: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
  }
  .router-link-exact-active {
    color: $color-green;
    border-bottom: 2px solid $color-withe;
  }
  button, .button {
      margin-left: auto;
      text-decoration: none;
    }
}
</style>
