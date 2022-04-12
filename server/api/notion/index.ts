import { useRuntimeConfig } from '#nitro';
import { notion } from '~~/composables/notion/client';

const config = useRuntimeConfig();

export default defineEventHandler(async () => {
  const databaseId = config.NOTION_DATABASE;
  const res = notion.databases.query({
    database_id: databaseId
  });
  return res;
});
