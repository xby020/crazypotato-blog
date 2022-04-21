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
        <div class="w-full pt-64px">
          <!-- head img -->
          <div class="w-768px h-320px mx-auto">
            <potato-img :src="pageInfo.cover" loading-icon></potato-img>
          </div>

          <!-- head -->
          <div class="w-664px h-320px mx-auto">
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

            <!-- description -->
            <div class="alert alert-info shadow-lg">
              <div>
                <potato-icon type="quote"></potato-icon>
                <span>{{ pageInfo.description }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- page info -->

        <!-- quote -->

        <!-- main content -->

        <!-- comment -->
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
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
});
</script>
<style lang=""></style>
