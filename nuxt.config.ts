import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  buildModules: ['nuxt-windicss', '@vueuse/core/nuxt'],
  privateRuntimeConfig: {
    NOTION_DATABASE: process.env.NOTION_DATABASE,
    NOTION_TOKEN: process.env.NOTION_TOKEN
  }
});
