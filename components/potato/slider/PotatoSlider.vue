<template>
  <div class="w-400px h-300px bg-dark-700" ref="slider"></div>
  <button @click="animation.transitionIn">In</button>
  <button @click="animation.transitionOUt">Out</button>
</template>

<script lang="ts" setup>
import { Effect } from './effect';
const imgList = [
  'https://cdn.pixabay.com/photo/2020/12/06/16/11/ornamentation-5809248_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/12/13/14/57/trees-6868446_960_720.jpg'
];

const slider = ref(null);
const animation = ref();

onMounted(() => {
  console.log(slider.value);

  animation.value = new Effect({
    parent: slider.value,
    intensity: 0.3,
    image1: imgList[1],
    image2: imgList[2],
    displacementImage: '/displacementImage/triangle.png'
  });
  console.log(animation);
});
</script>

<style scoped></style>
