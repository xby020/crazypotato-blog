import { Client } from '@notionhq/client';

const config = useRuntimeConfig();
export const notion = new Client({
  auth: config.NOTION_TOKEN
});
