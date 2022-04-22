import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from '~~/composables/notion/client';

export default defineEventHandler(async (event) => {
  const pageId = event.context.params.id;
  const listBlockResult: any = [];
  let cursor = undefined;
  while (true) {
    const res: ListBlockChildrenResponse = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
      start_cursor: cursor
    });
    const { results, next_cursor } = res;
    listBlockResult.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return listBlockResult;
});
