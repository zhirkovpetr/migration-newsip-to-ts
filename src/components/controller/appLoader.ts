import Loader from "./loader";

class AppLoader extends Loader {
    constructor() {
        super("https://newsapi.org/v2/", {
            apiKey: "05293e340c1f4b4f8bfedadac34aa2f2",
        });
    }
}
export default AppLoader;
