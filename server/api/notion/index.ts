import { notion } from '~~/composables/notion/client';

export default defineEventHandler(async () => {
  const databaseId = useRuntimeConfig().NOTION_DATABASE;
  const res = await notion.databases.query({
    database_id: databaseId
  });
  return res;
});
