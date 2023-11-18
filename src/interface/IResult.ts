import {ErrorStatusCode} from "../components/controller/loader";

export interface IResult extends Response {
  ok: boolean;
  status: ErrorStatusCode;
  statusText: string;
}
