import AppLoader from "./appLoader";
import { IGeneric } from "../view/appView";

class AppController extends AppLoader {
  getSources(callback: (data: IGeneric) => void) {
    super.getResp(
      {
        endpoint: "sources",
      },
      callback
    );
  }
  getNews(e: Event, callback: (data: IGeneric) => void) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;
    while (target !== newsContainer) {
      if (target.classList.contains("source__item")) {
        const sourceId = target.getAttribute("data-source-id");
        if (newsContainer.getAttribute("data-source") !== sourceId) {
          if (sourceId != null) {
            newsContainer.setAttribute("data-source", sourceId);
          }
          super.getResp(
            {
              endpoint: "everything",
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}
export default AppController;
