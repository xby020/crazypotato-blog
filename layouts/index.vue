<template>
  <div class="w-full h-full">
    <potato-app-bar dense>
      <div class="text-primary text-3xl text-blue-500">CrazyPotato</div>
    </potato-app-bar>
    主页layout
    <slot />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  layout: 'default'
});
</script>
