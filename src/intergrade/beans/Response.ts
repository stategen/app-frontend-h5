/**
 *  Do not remove this unless you get business authorization.
 *  Response
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import ResponseStatus from "../enums/ResponseStatus";
import {Bean} from "@utils/DvaUtil";

export enum ResponseFields {
  /** code */
  code = 'code',
  /** exeptionClass */
  exeptionClass = 'exeptionClass',
  /** data */
  data = 'data',
  /** status */
  status = 'status',
  /** message */
  message = 'message',
  /** success */
  success = 'success',
}

export default interface Response<T> extends Bean {

  /** code */
  code?: number;

  /** exeptionClass */
  exeptionClass?: string;

  /** data */
  data?: T;

  /** status */
  status?: ResponseStatus;

  /** message */
  message?: string;

  /** success */
  success?: boolean;

}

