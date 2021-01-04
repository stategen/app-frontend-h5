/**
 *  Do not remove this unless you get business authorization.
 *  HomeAdvertise
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import AdvertisePicture from "../beans/AdvertisePicture";
import {Bean} from "@utils/DvaUtil";

/** homeAdvId */
export const HomeAdvertise_ID: string = 'homeAdvId';

export const HomeAdvertiseFields = {
  homeAdvId: HomeAdvertise_ID,
}

export default interface HomeAdvertise extends Bean, AdvertisePicture {

  /** homeAdvId */
  homeAdvId?: string;

  /** homeAdvId s */
  homeAdvIds?: string[];

}

