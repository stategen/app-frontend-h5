/**
 *  Do not remove this unless you get business authorization.
 *  GoodsDetail
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Net, Method, MediaType, RequestInitEx} from "@utils/Net";

import Goods from "../beans/Goods";
import {apiUrlKey} from "../configs/tradeApp-config";

export default class GoodsDetailApis {
  /**
   * POST /api/goodsDetail/getGoodDetailById
   * 
   */
  static getGoodDetailById(params: { goodsId?: string } | string): Goods {
    let requestInit: RequestInitEx = <RequestInitEx>{};
    requestInit.apiUrlKey = apiUrlKey;
    requestInit.url = '/api/goodsDetail/getGoodDetailById';
    requestInit.mediaType = MediaType.FORM;
    requestInit.data = (params instanceof Object && !Array.isArray(params)) ? params : {goodsId: params};
    requestInit.method = Method.POST;
    return Net.fetch(requestInit);
  }

}