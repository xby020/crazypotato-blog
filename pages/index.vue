<template>
  <div class="w-full">
    <div class="w-full">
      <potato-img
        width="100%"
        height="400px"
        src="https://cdn.pixabay.com/photo/2021/11/19/15/21/christmas-6809681_960_720.png"
      ></potato-img>
    </div>
    This is index page.

    <nuxt-link to="/blog" v-slot="{ navigate }">
      <div class="w-200px h-100px bg-blue-500 rounded-lg">
        <button @click="navigate">blog</button>
      </div>
    </nuxt-link>

    <div>
      <potato-switch></potato-switch>
    </div>

    <div class="w-full h-400px">
      <potato-slider></potato-slider>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({});
</script>
