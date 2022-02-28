import config from '#config';
import { notion } from '~~/composables/notion/client';

export default async () => {
  const databaseId = config.NOTION_DATABASE;
  const res = await notion.databases.query({
    database_id: databaseId
  });
  return res;
};
