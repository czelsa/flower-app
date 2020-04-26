import Vue from 'vue';
import VueI18n from 'vue-i18n';

import translationEN from '@/assets/translations/en.json';

Vue.use(VueI18n);

const messages = {
  en: translationEN,
};

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: process.env.NODE_ENV === 'production',
  messages,
});
