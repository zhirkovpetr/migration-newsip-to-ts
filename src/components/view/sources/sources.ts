import "./sources.css";
import { ISource } from "../../../interface/IArticles";

class Sources {
    draw(data: Array<ISource>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector("#sourceItemTemp");
        data.forEach((item: ISource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            if (sourceClone) {
                sourceClone.querySelector(".source__item-name").textContent = item.name;
                sourceClone.querySelector(".source__item").setAttribute("data-source-id", item.id);
                fragment.append(sourceClone);
            }
        });
        document.querySelector(".sources").append(fragment);
    }
}

const s = document.querySelector(".sources");
let o: number;
o = 0;
document.querySelector(".slider-next").addEventListener("click", function () {
    o += 256;
    s.style.left = -o + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
    o -= 256;
    if (o < 0) {
        o = 0;
    }
    s.style.left = -o + "px";
});

export default Sources;
