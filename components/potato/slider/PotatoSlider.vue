<template>
  <div
    class="w-full h-full bg-dark-700 overflow-hidden"
    ref="slider"
    id="slider"
  ></div>
  <button @click="switchFunc(0)" class="w-40 h-16 bg-blue-300 text-center">
    1
  </button>
  <button @click="switchFunc(1)" class="w-40 h-16 bg-blue-300 text-center">
    2
  </button>
  <button @click="switchFunc(2)" class="w-40 h-16 bg-blue-300 text-center">
    3
  </button>
</template>

<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core';
import { transEffect } from './effect';
const imgList = [
  'https://cdn.pixabay.com/photo/2020/12/06/16/11/ornamentation-5809248_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/11/05/01/30/snow-6769948_960_720.jpg'
];

const slider = ref();
const animation = ref();

onMounted(() => {
  animation.value = new transEffect({
    container: slider.value,
    images: imgList
  });
});

const switchFunc = computed(() => {
  return animation.value.switchById;
});

// resize
useResizeObserver(slider, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  animation.value.resize(width, height);
});
</script>

<style scoped></style>
