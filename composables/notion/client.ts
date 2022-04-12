import { Client } from '@notionhq/client';
import { useRuntimeConfig } from '#nitro';

const config = useRuntimeConfig();
export const notion = new Client({
  auth: config.NOTION_TOKEN
});
