<template>
    <div class="conteiner-centralized">
      <form @submit.prevent="login">
        <label for="username">
          {{ $t("views.login.username") }}:
        </label>
        <input v-model="username" type="username" name="username" value>

        <label for="password">
          {{ $t("views.login.password") }}:
        </label>
        <input v-model="password" type="password" name="password" value>
        <load-button name="button" type="primary" @click="login">
          {{ $t("views.login.login") }}
        </load-button>
        <div class="position-right">
          <router-link to="/register">
            {{ $t("views.login.signUp") }}
          </router-link>
        </div>
      </form>
    </div>
</template>

<script>
import LoadButton from '@/components/LoadButton.vue';

export default {
  components: {
    LoadButton,
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      })
        .then(() => {
          this.$router.push({ name: 'dashboard' });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.conteiner-centralized {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  box-shadow: $box-shadow;
  padding: 24px !important;
  z-index: 2;
  input {
    display: block;
    font-size: $font-size-small;
    font-weight: font-weight;
    border-radius: 4px;
    background-color: $color-withe;
    border: 1px solid $color-gray;
    color: $color-black;
    width: 300px;
    height: 34px;
    padding: 4px 8px;
    box-sizing: border-box;
    margin: 0 0 10px;
    text-overflow: ellipsis;
  }
}
</style>
