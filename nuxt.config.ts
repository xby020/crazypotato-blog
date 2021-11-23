import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // make naive-ui work in nuxt3
  // see https://github.com/TuSimple/naive-ui/issues/636
  vite: false,
  typescript: {
    strict: true
  },
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt']
});
