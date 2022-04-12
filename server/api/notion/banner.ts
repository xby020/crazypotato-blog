import { useRuntimeConfig } from '#nitro';
import { notion } from '~~/composables/notion/client';

const config = useRuntimeConfig();

export default defineEventHandler(async () => {
  const databaseId = config.NOTION_DATABASE;
  // 获取所有 banner page
  const res = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Banner',
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending'
      }
    ]
  });
  return res;
});
