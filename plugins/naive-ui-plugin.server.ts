import { setup } from '@css-render/vue3-ssr';
import { defineNuxtPlugin } from '#app';

// see https://github.com/TuSimple/naive-ui/issues/636
export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.vueApp);
  nuxtApp.ssrContext!.renderMeta = () => {
    return {
      headTags: collect()
    };
  };
});
