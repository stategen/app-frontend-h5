/**
 *  Do not remove this unless you get business authorization.
 *  FloorGoods
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Goods from "../beans/Goods";
import GoodsComment from "../beans/GoodsComment";
import {Bean} from "@utils/DvaUtil";

/** floorGoodsId */
export const FloorGoods_ID: string = 'floorGoodsId';

export default interface FloorGoods extends Bean, Goods {

  /** floorGoodsId */
  floorGoodsId?: string;

  /** floorGoodsId s */
  floorGoodsIds?: string[];

  /** floorId */
  floorId?: string;

  /** floorId s */
  floorIds?: string[];

  /** orderNo */
  orderNo?: number;

  /** orderNoMax */
  orderNoMax?: number;

  /** orderNoMin */
  orderNoMin?: number;

}

