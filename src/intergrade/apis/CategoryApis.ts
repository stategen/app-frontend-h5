/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import Category from "../beans/Category";
import {tradeAppBaseUrlKey} from "../configs/tradeApp-config";

export default class CategoryApis {
  /**
   * POST /api/category/getCategory
   * 
   */
  static getCategory(params?: {}): Category[] {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeAppBaseUrlKey;
    requestInit.url = '/api/category/getCategory';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

}