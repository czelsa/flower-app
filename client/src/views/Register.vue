<template>
      <div class="conteiner-centralized">
        <form @submit.prevent="register">
          <label for="username">{{ $t("views.register.name") }}:</label>
          <input v-model="username" type="text" name="username" value>

          <label for="email">{{ $t("views.register.email") }}:</label>
          <input v-model="email" type="email" name="email" value>

          <label for="password">{{ $t("views.register.password") }}:</label>
          <input v-model="password" type="password" name="password" value>
          <load-button name="button" type="primary" @click="register">
            {{ $t("views.register.register") }}
          </load-button>
          <div class="position-right">
            <router-link to="/login">
              {{ $t("views.register.signIn") }}
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
      email: '',
      password: '',
    };
  },
  methods: {
    register() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('register', user)
        .then(() => {
          this.$router.push({ name: 'login' });
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
