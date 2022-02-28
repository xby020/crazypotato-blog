import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt'],
  alias: {
    '@': '/'
  },
  privateRuntimeConfig: {
    NOTION_DATABASE: process.env.NOTION_DATABASE,
    NOTION_KEY: process.env.NOTION_KEY
  }
});
