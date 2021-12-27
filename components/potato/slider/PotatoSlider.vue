<template>
  <div class="w-400px h-300px bg-dark-700" ref="slider"></div>
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
import { transEffect } from './effect';
const imgList = [
  'https://cdn.pixabay.com/photo/2020/12/06/16/11/ornamentation-5809248_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/12/13/14/57/trees-6868446_960_720.jpg'
];

const slider = ref(null);
const animation = ref();

onMounted(() => {
  console.log(slider.value);

  animation.value = new transEffect({
    container: slider.value,
    images: imgList
  });
});

const switchFunc = computed(() => {
  return animation.value.switchById;
});
</script>

<style scoped></style>
