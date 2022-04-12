<template>
  <div class="w-full">
    <!-- banner -->
    <!-- <potato-slider
      class="w-full h-630px"
      :slider-list="sliderList"
    ></potato-slider> -->

    <!-- Topic -->
    <div
      class="relative z-10 mt-[40px] lg:mt-[-40px] mb-[40px] flex justify-center items-center"
    >
      <transition
        enter-active-class="transform transition-transform duration-300 ease-in"
        leave-active-class="transform transition-transform duration-300 ease-in"
        enter-from-class="-translate-x-10px"
        leave-to-class="translate-x-10px"
      >
        <div class="p-[20px] carousel carousel-start space-x-[20px]">
          <!-- item -->

          <div
            class="carousel-item w-[280px] h-[210px] transition-transform transform shadow-none hover:(-translate-y-[5px] duration-300 ease-in-out shadow-lg children:scale-101)"
          >
            <div
              class="blur-bg rounded-xl w-full h-full absolute filter blur opacity-70 transition-transform transform scale-0"
            ></div>
            <img
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6693"
              class="rounded-box"
            />
          </div>

          <!-- item -->
          <div
            class="carousel-item w-[280px] h-[210px] transition-transform transform shadow-none hover:(-translate-y-[5px] duration-300 ease-in-out shadow-lg children:scale-101)"
          >
            <div
              class="blur-bg rounded-xl w-full h-full absolute filter blur opacity-70 transition-transform transform scale-0"
            ></div>
            <img
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6623"
              class="rounded-box"
            />
          </div>

          <!-- item -->
          <div
            class="carousel-item w-[280px] h-[210px] transition-transform transform shadow-none hover:(-translate-y-[5px] duration-300 ease-in-out shadow-lg children:scale-101)"
          >
            <div
              class="blur-bg rounded-xl w-full h-full absolute filter blur opacity-70 transition-transform transform scale-0"
            ></div>
            <img
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225A6693"
              class="rounded-box"
            />
          </div>

          <!-- item -->
          <div
            class="carousel-item w-[280px] h-[210px] transition-transform transform shadow-none hover:(-translate-y-[5px] duration-300 ease-in-out shadow-lg children:scale-101)"
          >
            <div
              class="blur-bg rounded-xl w-full h-full absolute filter blur opacity-70 transition-transform transform scale-0"
            ></div>
            <img
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225C6693"
              class="rounded-box"
            />
          </div>
        </div>
      </transition>
    </div>

    <!-- main content -->
    <div class="w-full flex flex-col items-center">
      <div class="container flex flex-row justify-center items-start">
        <!-- left -->
        <div class="w-[820px] mr-[80px]">
          <div class="tabs">
            <a class="tab tab-bordered">Tab 1</a>
            <a class="tab tab-bordered tab-active">Tab 2</a>
            <a class="tab tab-bordered">Tab 3</a>
          </div>
        </div>

        <!-- right -->
        <div class="w-[250px] bg-purple-900">233</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'BLOG',
  layout: 'index'
});

// banner slider
const sliderList = ref();
onMounted(async () => {
  const res = await $fetch('api/notion/banner');
  sliderList = res.results.map((page) => {
    const title = page.properties;
  });
});
</script>

<style>
.blur-bg {
  background-image: url('https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6693');
  z-index: -1;
}
</style>
