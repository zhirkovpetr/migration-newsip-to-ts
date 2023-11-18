import News from "./news/news";
import Sources from "./sources/sources";
import { INews } from "../../interface/INews";
import { IArticles, ISource } from "../../interface/IArticles";

export interface IData {
    sources: Array<ISource>;
}

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INews): void {
        const values: IArticles[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IData): void {
        const values: Array<ISource> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
export default AppView;
