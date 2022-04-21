<template>
  <div
    class="absolute top-0 left-0 flex flex-col justify-center items-center"
    :class="screen ? ['w-screen', 'h-screen'] : ['w-full', 'h-full']"
  >
    <!-- dark overlay -->
    <div
      class="absolute w-full h-full bg-neutral"
      :class="dark ? 'opacity-75' : 'opacity-0'"
    ></div>
    <!-- loading icon -->
    <potato-icon
      v-if="loadingIcon"
      type="loading"
      size="32"
      class="animate-spin"
    ></potato-icon>
  </div>
</template>

<script lang="ts" setup>
// props
withDefaults(
  defineProps<{
    dark?: boolean;
    loadingIcon?: boolean;
    screen?: boolean;
  }>(),
  {
    dark: true,
    loadingIcon: false,
    screen: false
  }
);
</script>

<style lang=""></style>
