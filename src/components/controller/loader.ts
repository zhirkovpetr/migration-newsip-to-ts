import { IGeneric } from "../view/appView";

class Loader {
    baseLink: string;

    options: {
        apiKey: string;
    };

    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
      { endpoint, options = {} }: { endpoint: string; options?: object },
      callback: (data: IGeneric) => void = () => {
          console.error("No callback for GET response");
      }
    ): void {
        this.load("GET", endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: object, endpoint: string): string {
        const urlOptions: { [key: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: (data: IGeneric) => void, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
          .then(this.errorHandler)
          .then((res) => res.json())
          .then((data) => callback(data))
          .catch((err) => console.error(err));
    }
}
export default Loader;
