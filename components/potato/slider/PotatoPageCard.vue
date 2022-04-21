<template>
  <div
    class="card lg:card-side bg-neutral shadow-md hover:shadow-primary-focus hover:children:children:opacity-100 transform transition-shadow"
  >
    <figure class="w-400px h-300px">
      <div class="absolute w-400px h-300px bg-hero-texture opacity-0"></div>
      <potato-img :src="imgLink" alt="Game" />
    </figure>
    <div class="card-body">
      <!-- title -->
      <h2 class="card-title">{{ title }}</h2>
      <!-- description -->
      <p>{{ content }}</p>
      <!-- action -->
      <div class="card-actions justify-end">
        <button class="btn btn-outlined tracking-widest" @click="navTo">
          查看
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
