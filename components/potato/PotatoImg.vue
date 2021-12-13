<template>
  <div
    ref="targetImg"
    :style="bgImg"
    class="bg-center bg-cover bg-no-repeat"
    :class="classConfig"
  ></div>
</template>

<script lang="ts" setup>
import { useIntersectionObserver } from '@vueuse/core';

// interface
interface PotatoImgPorps {
  src: string;
  width?: string | number;
  height?: string | number;
}

// props
const props = withDefaults(defineProps<PotatoImgPorps>(), {
  src: ''
});

// ref props
const { src, width, height } = toRefs(props);

// img intersector
const imgIsVisiable = ref(false);
const targetImg = ref(null);
// img width and height
const imgWidth = ref<string | number>(width?.value || 0);
const imgHeight = ref<string | number>(height?.value || 0);

useIntersectionObserver(targetImg, ([{ isIntersecting }]) => {
  imgIsVisiable.value = isIntersecting;
});

const bgImg = `background-image:url(${src.value})`;

// return class config
const imgWidthClass = computed((): string => {
  return `w-${imgWidth.value}`;
});
const imgHeightClass = computed((): string => {
  return `w-${imgHeight.value}`;
});
const classConfig = computed((): string[] => {
  return [imgWidthClass.value, imgHeightClass.value];
});

// init Img size
onBeforeMount(() => {
  // get image size
  const imgDom = new Image();
  imgDom.src = src.value;
  imgDom.onload = () => {
    if (!height?.value) {
      // when height prop didn't set, use src height
      imgHeight.value = `${imgDom.height}px`;
    }
  };
});
</script>

<style scoped></style>
