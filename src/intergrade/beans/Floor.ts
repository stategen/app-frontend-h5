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

export default interface Floor extends Bean {

  /** floorGoodss */
  floorGoodss?: FloorGoods[];

  /** advertisePicture */
  advertisePicture?: AdvertisePicture;

  /** floorId */
  floorId?: string;

  /** advertiseId */
  advertiseId?: number;

  /** orderNo */
  orderNo?: number;

  /** floorName */
  floorName?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** floorId s */
  floorIds?: string[];

  /** advertiseId s */
  advertiseIds?: number[];

  /** orderNoMin */
  orderNoMin?: number;

  /** orderNoMax */
  orderNoMax?: number;

  /** floorNameLike */
  floorNameLike?: string;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

}

