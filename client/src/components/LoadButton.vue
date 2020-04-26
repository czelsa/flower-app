<template>
  <button
    :class="{
      'button-primary': type === 'primary',
      'button-secondary': type === 'secondary',
      'button-link': type === 'link',
    }"
    :disabled="disabled || loading"
    v-on="$listeners">

    <slot v-if="!loading" />

    <template v-else>
      <slot name="loading">{{ loadingText }}</slot>
    </template>
  </button>
</template>

<script>
import { BUTTON_TYPES } from '../constants';

export default {
  name: 'LoadButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(value) {
        return BUTTON_TYPES.includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-primary {
  font-size: $font-size-small;
  font-weight: font-weight;
  border-radius: 4px;
  border: none;
  color: $color-withe;
  height: 34px;
  padding: 4px 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: $color-green;
  cursor: pointer;
  min-width: 120px;
  position: relative;
  text-align: center;
  line-height: 120%;
}

.button-secondary {
  font-size: $font-size-small;
  font-weight: font-weight;
  border-radius: 4px;
  border: none;
  color: $color-withe;
  height: 34px;
  padding: 4px 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: $color-spruce;
  cursor: pointer;
  min-width: 120px;
  position: relative;
  text-align: center;
  line-height: 120%;
}

.button-link {
  color: $color-blue;
  text-decoration: underline;
  font-size: $font-size-small;
  display: inline-block;
  padding: 0;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  height: auto;
  min-height: 34px;
  padding: 8px 12px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: 0 0;
}
</style>
