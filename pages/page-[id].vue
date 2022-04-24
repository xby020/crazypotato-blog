<template>
  <div class="w-full h-full">
    <transition
      enter-active-class="transform duration-500 ease-in"
      leave-active-class="transform transition duration-500 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <potato-overlay
        dark
        loading-icon
        screen
        v-if="!pageInfo"
      ></potato-overlay>

      <div v-else>
        <!-- banner -->
        <div class="absolute w-full h-320px bg-neutral">
          <!-- background img -->
          <potato-img
            src="https://api.lorem.space/image/game?w=1920&h=1080&hash=225C1293"
            class="opacity-30"
          ></potato-img>
          <!-- banner gradient mask -->
          <div
            class="absolute top-0 w-full h-full bg-gradient-to-t from-neutral"
          ></div>
        </div>

        <!-- titie -->
        <div class="relative w-full pt-64px">
          <!-- head img -->
          <div class="w-768px h-320px mx-auto rounded-xl overflow-hidden">
            <potato-img :src="pageInfo.cover" loading-icon></potato-img>
          </div>

          <!-- head -->
          <div class="w-664px mx-auto">
            <!-- title -->
            <h1
              class="font-semibold font-mono text-3xl my-4 text-center tracking-wider"
            >
              {{ pageInfo.title }}
            </h1>

            <!-- create time -->
            <h2 class="font-mono my-4 text-center">
              {{ pageInfo.createdTime }}
            </h2>

            <!-- tags -->
            <div>
              <button
                class="btn btn-xs btn-outline m-1 mb-4 font-thin"
                v-for="tag in pageInfo.tags"
                :key="tag.id"
              >
                {{ tag.name }}
              </button>
            </div>

            <!-- description -->
            <div class="alert alert-info shadow-lg">
              <div>
                <potato-icon type="quote"></potato-icon>
                <span>{{ pageInfo.description }}</span>
              </div>
            </div>
          </div>

          <div class="divider w-full"></div>
        </div>

        <!-- main content -->
        <div class="relative w-664px min-h-720px mx-auto">
          <potato-overlay
            v-if="!pageContent"
            loading-icon
            dark
          ></potato-overlay>
          <div v-else>
            {{ pageContent }}
          </div>
        </div>
        <!-- comment -->
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
import { switchCase } from '@babel/types';
import Dayjs from 'dayjs';

definePageMeta({
  title: 'page'
});

const route = useRoute();
const pageId = route.params.id;

async function getPageContent() {
  const res: any = await $fetch(`api/notion/page/${pageId}`);
  console.log(res);
  return res;
}

function decodeResult(page: any) {
  const title = page.properties.Name.title[0].plain_text;
  const description = page.properties.Description.rich_text[0].plain_text;
  const createdTime = Dayjs(page.properties.Created.created_time).format(
    'YYYY-MM-DD'
  );
  const tags = page.properties.Tags.multi_select;
  const cover = page.properties.Cover.files[0].external.url;

  const pageInfo = { title, description, createdTime, tags, cover };
  return pageInfo;
}

// page info
const pageInfo = ref();
onMounted(async () => {
  const content = await getPageContent();
  pageInfo.value = decodeResult(content);
});

// page content
const pageContent = ref();
onMounted(async () => {
  const contentResult = await $fetch(`api/notion/block/${pageId}`);
  console.log(contentResult);
  pageContent.value = contentResult;
});

// tags color
const tagColorClass = (color: string) => {
  switch (color) {
    case 'gray':
      return 'border-gray-600 text-gray-600';
    case 'brown':
      return 'border-yellow-700 text-yellow-700';
    case 'orange':
      return 'border-yellow-500 text-yellow-500';
    case 'yellow':
      return 'border-yellow-300 text-yellow-300';
    case 'green':
      return 'border-green-500 text-green-500';
    case 'blue':
      return 'border-blue-500 text-blue-500';
    case 'purple':
      return 'border-purple-500 text-purple-500';
    case 'pink':
      return 'border-pink-500 text-pink-500';
    case 'red':
      return 'border-red-600 text-red-600';
    default:
      return 'border-gray-100 text-gray-100';
  }
};
</script>
<style lang=""></style>
