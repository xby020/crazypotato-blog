<template>
  <div
    ref="targetImg"
    :style="styleConfig"
    class="relative bg-center bg-cover bg-no-repeat"
  >
    <!-- partten -->
    <div class="bg-hero-texture w-full h-full" v-show="partten"></div>
    <!-- loading -->
    <Transition
      enter-active-class="transform duration-300 ease-in"
      leave-active-class="transform duration-300 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        class="absolute top-0 w-full h-full flex justify-center items-center bg-neutral"
        v-if="imgLoading"
      >
        <potato-icon
          type="loading"
          class="animate-spin"
          size="32"
          v-if="loadingIcon"
        ></potato-icon>
      </div>
    </Transition>

    <!-- error icon -->
    <div
      class="absolute top-0 w-full h-full flex justify-center items-center"
      v-if="damageImg"
    >
      <potato-icon type="damage-map" size="32"></potato-icon>
    </div>
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
  loadingIcon?: boolean;
}

// props
const props = withDefaults(defineProps<PotatoImgPorps>(), {
  src: '',
  partten: false,
  loadingIcon: false
});

// ref props
const { src, width, height, partten, loadingIcon } = toRefs(props);

// img intersector
const imgIsVisiable = ref(false);
const targetImg = ref(null);
// img width and height
const imgWidth = ref<string | number>(width?.value || '100%');
const imgHeight = ref<string | number>(height?.value || '100%');

useIntersectionObserver(targetImg, ([{ isIntersecting }]) => {
  imgIsVisiable.value = isIntersecting;
});

// backgound img onload
const bgImg = ref('');
const damageImg = ref(false);
const imgLoading = ref(false);
function load() {
  imgLoading.value = true;
  const img = new Image();
  img.src = src.value;
  img.onload = () => {
    bgImg.value = `background-image:url(${src.value})`;
    imgLoading.value = false;
  };
  img.onerror = () => {
    imgLoading.value = false;
    damageImg.value = true;
  };
}
onMounted(() => {
  load();
});

// return class config
const imgWidthClass = computed((): string => {
  return `width:${imgWidth.value}`;
});
const imgHeightClass = computed((): string => {
  return `height:${imgHeight.value}`;
});
// final style
const styleConfig = computed((): string => {
  return `${bgImg.value};${imgWidthClass.value};${imgHeightClass.value}`;
});
</script>

<style scoped></style>
