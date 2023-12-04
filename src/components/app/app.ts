import AppController from "../controller/controller";
import { AppView, IData } from "../view/appView";
import { INews } from "../../interface/INews";

class App {
    controller: AppController;

    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document.querySelector(".sources") as HTMLElement).addEventListener("click", (e: MouseEvent) =>
          this.controller.getNews(e, (data: INews) => this.view.drawNews(data))
        );
        this.controller.getSources((data: IData) => this.view.drawSources(data));
    }
}
export default App;
