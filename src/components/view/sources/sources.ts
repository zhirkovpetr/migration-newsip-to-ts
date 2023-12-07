import "./sources.css";
import { ISource } from "../../../interface/IArticles";

class Sources {
  draw(data: Array<ISource>) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector("#sourceItemTemp") as HTMLTemplateElement;

    data.forEach((item: ISource) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;
      if (sourceClone) {
        (sourceClone.querySelector(".source__item-name") as HTMLElement).textContent = item.name;
        (sourceClone.querySelector(".source__item") as HTMLElement).setAttribute("data-source-id", item.id);

        fragment.append(sourceClone);
      }
    });

    (document.querySelector(".sources") as HTMLElement).append(fragment);
  }
}

const sourcesElement = document.querySelector(".sources") as HTMLElement;
let o: number;
o = 0;
(document.querySelector(".slider-next") as HTMLElement).addEventListener("click", function () {
  o += 256;
  sourcesElement.style.left = -o + "px";
});

(document.querySelector(".slider-prev") as HTMLElement).addEventListener("click", function () {
  o -= 256;
  if (o < 0) {
    o = 0;
  }
  sourcesElement.style.left = -o + "px";
});

export default Sources;
