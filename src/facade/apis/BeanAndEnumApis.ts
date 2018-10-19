/** ---
 *  
 *  created by progen ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 progen代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import ResponseExtend from "../beans/ResponseExtend";
import ResponseStatus from "../enums/ResponseStatus";
import RoleType from "../enums/RoleType";
import {apiUrlkey} from "./trade-app-config";

export default class BeanAndEnumApis {
  /**
   * POST /api/getResponseExtend
   * 
   */
  static getResponseExtend(params: {}): ResponseExtend<number> {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlkey = apiUrlkey;
    requestInit.url = '/api/getResponseExtend';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/getResponseStatus
   * 
   */
  static getResponseStatus(params: {}): ResponseStatus {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlkey = apiUrlkey;
    requestInit.url = '/api/getResponseStatus';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/getRoleType
   * 
   */
  static getRoleType(params: {}): RoleType {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlkey = apiUrlkey;
    requestInit.url = '/api/getRoleType';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

}