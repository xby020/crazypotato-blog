<template>
  <div>
    <!-- banner -->
    <div class="relative w-full h-320px bg-neutral">
      <potato-img
        src="https://api.lorem.space/image/game?w=1920&h=1080&hash=225C1293"
        opacity="30"
      ></potato-img>
      <div class="w-664px h-320px rounded-3xl border">
        <potato-img
          src="https://api.lorem.space/image/game?w=1920&h=1080&hash=225C1293"
          width="664px"
          height="320px"
          partten
        ></potato-img>
      </div>
    </div>
    <!-- titie -->

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
