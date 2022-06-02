import {CommonResult} from "./common-result";

export interface SingleResult<T> extends CommonResult {
  data: T | null,
}
