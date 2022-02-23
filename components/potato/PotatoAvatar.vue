<template>
  <div class="w-32px h-32px rounded-full bg-gray-500 overflow-hidden">
    <potato-img :src="url"></potato-img>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  url: String
});
</script>
