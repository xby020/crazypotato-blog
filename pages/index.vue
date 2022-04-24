<template>
  <div class="w-full">
    <!-- banner -->
    <potato-slider
      class="w-full h-630px"
      :slider-list="sliderList"
      v-if="sliderList.length !== 0"
    ></potato-slider>
    <div class="bg-dark-400 w-full h-630px" v-else></div>

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
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225A6493"
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
              src="https://api.lorem.space/image/furniture?w=280&h=210&hash=225C1293"
              class="rounded-box"
            />
          </div>
        </div>
      </transition>
    </div>

    <!-- main content -->
    <div class="max-w-1180px mx-auto flex flex-row items-start">
      <!-- left -->
      <div class="w-[70%] grid grid-cols-1 gap-y-8">
        <potato-page-card
          v-for="(page, pageIndex) in pageList"
          :key="pageIndex"
          :info="page"
        ></potato-page-card>
      </div>

      <!-- right -->
      <div class="w-[30%] bg-purple-900">233</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

definePageMeta({
  title: 'Index',
  layout: 'index',
  keepalive: true
});

// banner slider
const sliderList = ref([]);
onMounted(async () => {
  const res: any = await $fetch('api/notion/banner');
  sliderList.value = res.results.map((page: any) => {
    const title = page.properties.Name.title[0].plain_text;
    const content = page.properties.Description.rich_text[0].plain_text;
    const imgLink = page.properties.Cover.files[0].external.url;

    return {
      title,
      content,
      imgLink
    };
  });
});

// page list
const pageList = ref();
async function getAllPage() {
  const res: QueryDatabaseResponse = await $fetch('api/notion/allPage');
  console.log(res);
  pageList.value = res.results.map((page: any) => {
    const title = page.properties.Name.title[0].plain_text;
    const content = page.properties.Description.rich_text[0].plain_text;
    const imgLink = page.properties.Cover.files[0].external.url || '';
    const pageId = page.id;
    return {
      title,
      content,
      imgLink,
      pageId
    };
  });
}
onMounted(async () => {
  await getAllPage();
});
</script>

<style>
.blur-bg {
  background-image: url('https://api.lorem.space/image/furniture?w=280&h=210&hash=225E6693');
  z-index: -1;
}
</style>
