export interface ILoader {
  baseLink: string;
  options: object;
  getResp(param: IMakeUrlParam, callback: () => void): void;
  makeUrl(param: IMakeUrlParam): string;
}

export interface IMakeUrlParam {
  endpoint: string;
  options?: object;
}
