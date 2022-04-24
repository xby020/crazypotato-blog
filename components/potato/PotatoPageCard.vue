<template>
  <div
    class="w-full h-full bg-neutral rounded-xl flex flex-col transition transform-gpu duration-200 ease-in-out lg:flex-row overflow-hidden hover:(shadow-md shadow-primary origin-center -translate-x-1 -translate-y-1)"
  >
    <!-- card img -->
    <div class="relative h-250px lg:w-400px">
      <potato-img :src="imgLink"></potato-img>
    </div>

    <div class="flex flex-col flex-grow">
      <!-- card content -->
      <div class="p-4 flex-grow">
        <h1 class="text-lg font-semibold">{{ title }}</h1>
        <p>{{ content }}</p>
      </div>
      <!-- card action -->
      <div class="p-4 flex lg:justify-end">
        <button @click="navTo" class="btn btn-primary btn-sm">
          <potato-icon type="link" size="1.2rem" class="mr-1"></potato-icon>
          <span class="text-light-50 tracking-wide font-thin">查看</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotionPage } from '~~/type/page';

const props = defineProps<{
  info: NotionPage.Card;
}>();

const { title, content, imgLink, pageId } = toRefs(props.info);
function navTo() {
  return navigateTo({
    path: `/page-${pageId.value}`
  });
}
</script>

<style lang=""></style>
