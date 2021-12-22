<template>
  <div class="w-full h-800px bg-dark-700" ref="slider"></div>
</template>

<script lang="ts" setup>
import effect from './effect.ts';
const imgList = [
  'https://cdn.pixabay.com/photo/2020/12/06/16/11/ornamentation-5809248_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/12/13/14/57/trees-6868446_960_720.jpg'
];

const slider = ref(null);

onMounted(() => {
  console.log(slider.value);
  const myAnimation = effect({
    parent: slider.value,
    intensity: 0.3,
    image1: imgList[0],
    image2: imgList[1],
    displacementImage: '/displacementImage/triangle.png'
  });
});
</script>

<style scoped></style>
