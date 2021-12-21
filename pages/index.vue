<template>
  <div>
    <potato-img
      width="100%"
      height="400px"
      src="https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?cs=srgb&dl=pexels-irina-iriser-1366957.jpg&fm=jpg"
    ></potato-img>
    This is index page.

    <nuxt-link to="/blog" v-slot="{ navigate }">
      <div class="w-200px h-100px bg-blue-500 rounded-lg">
        <button @click="navigate">blog</button>
      </div>
    </nuxt-link>

    <div>
      <potato-switch></potato-switch>
    </div>
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({});
</script>
