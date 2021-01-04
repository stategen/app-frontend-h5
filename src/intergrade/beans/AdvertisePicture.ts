/**
 *  Do not remove this unless you get business authorization.
 *  AdvertisePicture
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** advertiseId */
export const AdvertisePicture_ID: string = 'advertiseId';

export const AdvertisePictureFields = {
  advertiseId: AdvertisePicture_ID,
}

export default interface AdvertisePicture extends Bean {

  /** advertiseId */
  advertiseId?: number;

  /** advertiseId s */
  advertiseIds?: number[];

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** pICTURE_ADDRESS */
  pICTURE_ADDRESS?: string;

  /** pictureAddress */
  pictureAddress?: string;

  /** pictureAddressLike */
  pictureAddressLike?: string;

  /** tO_PLACE */
  tO_PLACE?: string;

  /** toPlace */
  toPlace?: string;

  /** toPlaceLike */
  toPlaceLike?: string;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** urlType */
  urlType?: number;

  /** urlType s */
  urlTypes?: number[];

}

