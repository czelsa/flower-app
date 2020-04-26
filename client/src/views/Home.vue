<template>
  <div class="home">
    <h1>{{ $t("views.home.welcomeMsg") }}</h1>
    <div v-if="!loggedIn">
      <span>{{ $t("views.home.loginMsg") }}</span>
      <router-link to="/login">
      {{ $t("views.home.login") }}
      </router-link>
      <router-link to="/register">
        {{ $t("views.home.register") }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { authComputed } from '@/store/helpers';

export default {
  name: 'Home',
  computed: {
    ...authComputed,
  },
};
</script>
