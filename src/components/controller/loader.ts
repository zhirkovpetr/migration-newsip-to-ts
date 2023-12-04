import { ILoader, IMakeUrlParam } from "../../interface/ILoader";
import { IResult } from "../../interface/IResult";

export type Callback<T> = (data: T) => void;

export enum ErrorStatusCode {
    Unauthorized = 401,
    NotFound,
}

class Loader implements ILoader {
    baseLink: string;

    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
      param: IMakeUrlParam,
      callback: Callback<T> = () => {
          console.error("No callback for GET response");
      }
    ): void {
        this.load("GET", param, callback);
    }

    errorHandler(res: IResult): IResult {
        if (!res.ok) {
            if (res.status === ErrorStatusCode.Unauthorized || res.status === ErrorStatusCode.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(param: IMakeUrlParam): string {
        const urlOptions: { [key: string]: string } = { ...this.options, ...param.options };
        let url = `${this.baseLink}${param.endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });
        return url.slice(0, -1);
    }

    load<T>(method: string, param: IMakeUrlParam, callback: Callback<T>): void {
        fetch(this.makeUrl(param), { method })
          .then(this.errorHandler)
          .then((res) => res.json())
          .then((data) => callback(data))
          .catch((err) => console.error(err));
    }
}
export default Loader;
