/**
 *  Do not remove this unless you get business authorization.
 *  Floor
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AdvertisePicture from "../beans/AdvertisePicture";
import FloorGoods from "../beans/FloorGoods";
import {Bean} from "@utils/DvaUtil";

/** floorId */
export const Floor_ID: string = 'floorId';

export const FloorFields = {
  floorId: Floor_ID,
}

export default interface Floor extends Bean {

  /** advertiseId */
  advertiseId?: number;

  /** advertiseId s */
  advertiseIds?: number[];

  /** advertisePicture */
  advertisePicture?: AdvertisePicture;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** floorGoodss */
  floorGoodss?: FloorGoods[];

  /** floorId */
  floorId?: string;

  /** floorId s */
  floorIds?: string[];

  /** floorName */
  floorName?: string;

  /** floorNameLike */
  floorNameLike?: string;

  /** orderNo */
  orderNo?: number;

  /** orderNoMax */
  orderNoMax?: number;

  /** orderNoMin */
  orderNoMin?: number;

  /** orderNo s */
  orderNos?: number[];

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

}

