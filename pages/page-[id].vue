<template>
  <div>
    <!-- banner -->
    <div class="w-full h-[320px]"></div>
    <!-- titie -->

    <!-- page info -->

    <!-- quote -->

    <!-- main content -->

    <!-- comment -->
  </div>
</template>
<script lang="ts" setup>
import { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';

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
