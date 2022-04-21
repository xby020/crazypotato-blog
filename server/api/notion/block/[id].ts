import { ListBlockChildrenResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from '~~/composables/notion/client';

export default defineEventHandler(async (event) => {
  const pageId = event.context.params.id;

  async function getBlockResult(blockId: string, pageSize: number = 100) {
    let listBlockResult: ListBlockChildrenResponse['results'][] = [];

    const res = await notion.blocks.children.list({
      block_id: blockId,
      page_size: pageSize
    });

    listBlockResult = useConcat(listBlockResult, res.results);
    // next
    if (res.next_cursor) {
      getBlockResult(res.next_cursor);
    }
  }
});
