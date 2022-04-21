import {
  GetPageResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';

declare namespace NotionPage {
  interface Card {
    title: string;
    content: string;
    imgLink: string;
    pageId: string;
  }
  type PageResult = Extract<
    QueryDatabaseResponse['results'][number],
    { parent: {} }
  >;

  type PageProperty<T> = Extract<PageResult['properties'][string], { type: T }>;
}
