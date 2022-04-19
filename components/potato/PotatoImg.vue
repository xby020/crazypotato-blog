<template>
  <div
    ref="targetImg"
    :style="styleConfig"
    class="bg-center bg-cover bg-no-repeat"
  >
    <div class="bg-hero-texture w-full h-full" v-show="partten"></div>
  </div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';

// interface
interface PotatoImgPorps {
  src: string;
  width?: string | number;
  height?: string | number;
  partten?: boolean;
}

// props
const props = withDefaults(defineProps<PotatoImgPorps>(), {
  src: '',
  partten: false
});

// ref props
const { src, width, height, partten } = toRefs(props);

// img intersector
const imgIsVisiable = ref(false);
const targetImg = ref(null);
// img width and height
const imgWidth = ref<string | number>(width?.value || '100%');
const imgHeight = ref<string | number>(height?.value || '100%');

useIntersectionObserver(targetImg, ([{ isIntersecting }]) => {
  imgIsVisiable.value = isIntersecting;
});

const bgImg = `background-image:url(${src.value})`;

// return class config
const imgWidthClass = computed((): string => {
  return `width:${imgWidth.value}`;
});
const imgHeightClass = computed((): string => {
  return `height:${imgHeight.value}`;
});
// final style
const styleConfig = computed((): string => {
  return `${bgImg};${imgWidthClass.value};${imgHeightClass.value}`;
});
</script>

<style scoped></style>
