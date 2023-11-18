import {IArticles} from "./IArticles";

export interface INews {
  status: string;
  totalResults?: number;
  articles: Array<IArticles>;
}
