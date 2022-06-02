import {CommonResult} from "./common-result";

export interface ListResult<T> extends CommonResult {
  data: T[] | null,
}
