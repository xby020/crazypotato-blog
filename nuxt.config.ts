import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt'],
  alias: {
    '@': '/'
  }
});
