import News, { IArticles, ISource } from "./news/news";
import Sources from "./sources/sources";

export interface IGeneric {
    articles: Array<IArticles>;
    sources: Array<ISource>;
}

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    drawNews(data: IGeneric): void {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }
    drawSources(data: IGeneric): void {
        const values: ISource[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
export default AppView;
