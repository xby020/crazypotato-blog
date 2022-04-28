import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: [
    'nuxt-lodash',
    'nuxt-windicss',
    '@vueuse/nuxt',
    // pinia [https://pinia.vuejs.org/ssr/nuxt.html#installation]
    '@pinia/nuxt'
  ],
  lodash: {
    prefix: 'useLodash'
  },
  runtimeConfig: {
    NOTION_DATABASE: process.env.NOTION_DATABASE,
    NOTION_TOKEN: process.env.NOTION_TOKEN
  }
});
