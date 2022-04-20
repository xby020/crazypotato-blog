<template>
  <div>
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
    <div class="w-full pt-64px">
      <!-- head img -->
      <div class="w-664px h-320px mx-auto">
        <potato-img
          src="https://api.lorem.space/image/game?w=1920&h=1080&hash=22532293"
          loading-icon
        ></potato-img>
      </div>
    </div>

    <!-- page info -->

    <!-- quote -->

    <!-- main content -->

    <!-- comment -->
  </div>
</template>
<script lang="ts" setup>
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

definePageMeta({
  title: 'page'
});

const route = useRoute();
const pageId = route.params.id;
async function getPageContent() {
  const res: GetPageResponse = await $fetch(`api/notion/page/${pageId}`);
  return res;
}

onMounted(async () => {
  const content = await getPageContent();
  console.log(content);
});
</script>
<style lang=""></style>
