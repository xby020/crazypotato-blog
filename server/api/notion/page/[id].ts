import { notion } from '~~/composables/notion/client';

export default defineEventHandler(async (event) => {
  const pageId = event.context.params.id;
  const res = await notion.pages.retrieve({
    page_id: pageId
  });
  return res;
});
