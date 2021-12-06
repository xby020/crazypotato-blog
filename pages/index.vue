<template>
  <div class="font-bold text-3xl">
    This is index page.

    <nuxt-link to="/blog" v-slot="{ navigate }">
      <div class="w-200px h-100px bg-blue-500 rounded-lg">
        <button @click="navigate">blog</button>
      </div>
    </nuxt-link>

    <potato-switch></potato-switch>

    <potato-custom></potato-custom>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({});
</script>
