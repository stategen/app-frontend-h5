/**
 *  Do not remove this unless you get business authorization.
 *  Home
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import Goods from "../beans/Goods";
import HomeWrap from "../beans/HomeWrap";
import PageList from "../beans/PageList";
import {tradeAppBaseUrlKey} from "../configs/tradeApp-config";

export default class HomeApis {
  /**
   * POST /api/home/homePageBelowConten
   * 
   */
  static homePageBelowConten(params: { pageSize?: number, pageNum?: number }): PageList<Goods> {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeAppBaseUrlKey;
    requestInit.url = '/api/home/homePageBelowConten';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

  /**
   * POST /api/home/homePageContent
   * 
   */
  static homePageContent(params: { lon?: number, lat?: number }): HomeWrap {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = tradeAppBaseUrlKey;
    requestInit.url = '/api/home/homePageContent';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = params;
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

}