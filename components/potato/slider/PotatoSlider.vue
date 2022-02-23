<template>
  <div class="relative w-full h-full bg-dark-700" ref="sliderElement">
    <!-- slider content -->
    <div
      class="absolute w-full h-full flex flex-col justify-center items-center bg-hero-texture bg-lime-900 bg-opacity-40"
    >
      <div class="w-1/2">
        <!-- content title -->
        <div
          class="w-full text-light-50 font-bold text-64px my-3 opacity-0 select-none"
          ref="contentTitle"
        >
          {{ sliderList[activeNav].title }}
        </div>
        <!-- content description -->
        <div
          class="w-full max-w-400px text-light-50 my-3 select-none opacity-0"
          ref="contentDesc"
        >
          {{ sliderList[activeNav].content }}
        </div>
        <!-- content link -->
        <a
          role="button"
          data-theme="emeraid"
          class="btn btn-primary min-w-128px font-bold text-lg text-justify"
          ref="contentLink"
        >
          关于
        </a>
      </div>
    </div>
    <!-- slider image -->
    <div
      class="w-full h-full overflow-hidden flex flex-col align-middle justify-center"
      ref="slider"
      id="slider"
    ></div>
    <!-- slider nav -->
    <div class="absolute top-1/2 right-30px transform -translate-y-1/2">
      <button
        v-for="(slider, sliderIndex) in sliderList"
        :key="sliderIndex"
        class="relative block w-16px h-16px my-4 rounded-full bg-light-50 appearance-none outline-none focus:outline-none opacity-50 hover:opacity-80 transition-opacity duration-200 ease-in-out"
        :class="sliderIndex === activeNav ? ['opacity-100'] : ''"
        @click="switchSlider(sliderIndex)"
      ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/// <reference path="./effect.d.ts"/>
import {
  useResizeObserver,
  useElementHover,
  useIntervalFn
} from '@vueuse/core';
import { transEffect } from './effect';

const sliderList: slider[] = [
  {
    title: '标题1',
    content:
      '这是标题1的内容,这是标题1的内容,这是标题1的内容，这是标题1的内容，这是标题1的内容这是标题1的内容，这是标题1的内容，这是标题1的内容',
    imgLink:
      'https://cdn.pixabay.com/photo/2022/01/16/15/03/finch-6942278_960_720.jpg'
  },
  {
    title: '标题2',
    content:
      '这是标题2的内容2的内容2的内容2的内容2的内容2的内容2的内容2的内容2的内容2的内容2的内容，2的内容2的内容，2的内容2的内容2的内容2的内容，2的内容',
    imgLink:
      'https://cdn.pixabay.com/photo/2021/12/02/18/46/soda-water-6841140_960_720.jpg'
  },
  {
    title: '标题3',
    content:
      '这是标题3的内容，3的内容，3的内容3的内容3的内容3的内容，3的内容，3的内容3的内容3的内容，3的内容3的内容3的内容3的内容，3的内容，3的内容3的内容3的内容',
    imgLink:
      'https://cdn.pixabay.com/photo/2021/12/08/15/53/traffic-6856075_960_720.jpg'
  }
];

// Dom
const sliderElement = ref();
const slider = ref();
const contentTitle = ref();
const contentDesc = ref();
const contentLink = ref();

// ref
const animation = ref();
const activeNav = ref<number>(0);

const { pause, resume } = useIntervalFn(() => {
  const listLength = sliderList.length;
  if (activeNav.value < listLength - 1) {
    switchSlider(activeNav.value + 1);
  } else {
    switchSlider(0);
  }
}, 5 * 1000);

onMounted(() => {
  animation.value = new transEffect({
    container: slider.value,
    sliderList: sliderList,
    title: contentTitle.value,
    content: contentDesc.value,
    link: contentLink.value
  });
});

// watching hover Effect
const isSliderHover = useElementHover(sliderElement);
watch(isSliderHover, (value) => {
  if (value) {
    pause();
  } else {
    resume();
  }
});

function switchSlider(sliderIndex: number) {
  activeNav.value = sliderIndex;
  animation.value.switchById(sliderIndex);
}

// resize
useResizeObserver(slider, (entries) => {
  const entry = entries[0];
  const { width, height } = entry.contentRect;
  animation.value.resize(width, height);
});
</script>

<style scoped></style>
