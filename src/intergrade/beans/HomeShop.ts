/**
 *  Do not remove this unless you get business authorization.
 *  HomeShop
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** homeShopId */
export const HomeShop_ID: string = 'homeShopId';

export default interface HomeShop extends Bean {

  /** homeShopId */
  homeShopId?: string;

  /** shopId */
  shopId?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** homeShopId s */
  homeShopIds?: string[];

  /** shopId s */
  shopIds?: string[];

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** leaderImage */
  leaderImage?: string;

  /** leaderPhone */
  leaderPhone?: string;

  /** leaderPhoneLike */
  leaderPhoneLike?: string;

}

