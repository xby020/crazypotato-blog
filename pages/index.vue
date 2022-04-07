<template>
  <div class="w-full">
    <!-- banner -->
    <potato-slider class="w-full h-400px"></potato-slider>

    <!-- Topic -->
    <div
      class="relative z-10 mt-[40px] lg:mt-[-40px] mb-[40px] flex justify-center items-center"
    >
      <div class="p-[10px] carousel carousel-start space-x-[20px]">
        <div
          class="carousel-item w-[280px] h-[210px] transition-transform transform shadow-none hover:(-translate-y-[5px] duration-300 ease-in-out shadow-lg)"
        >
          <div
            class="blur-bg rounded-lg w-full h-full absolute -top-10px -left-10px filter blur-sm opacity-70 transform scale-105"
          ></div>
          <img
            src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6693"
            class="rounded-box"
          />
        </div>
      </div>
    </div>

    This is index page.
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'BLOG',
  layout: 'index'
});
</script>

<style>
.blur-bg {
  background-image: url('https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6693');
  z-index: -1;
}
</style>
