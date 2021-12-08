<template>
  <div>
    <img
      src="https://cdn.pixabay.com/photo/2021/11/23/00/24/monstera-6817675_960_720.jpg"
      style="width: 100%; height: 400px"
    />
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
