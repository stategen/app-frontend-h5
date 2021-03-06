/**
 *  Do not remove this unless you get business authorization.
 *  Response
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import ResponseStatus from "../enums/ResponseStatus";
import SimpleResponse from "../beans/SimpleResponse";
import {Bean} from "@utils/DvaUtil";


export const ResponseFields = {
}

export default interface Response<T> extends Bean, SimpleResponse {

  /** code */
  code?: number;

  /** data */
  data?: T;

  /** exeptionClass */
  exeptionClass?: string;

  /** status */
  status?: ResponseStatus;

}

