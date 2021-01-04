/**
 *  Do not remove this unless you get business authorization.
 *  Goods
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import GoodsComment from "../beans/GoodsComment";
import {Bean} from "@utils/DvaUtil";

/** goodsId */
export const Goods_ID: string = 'goodsId';

export const GoodsFields = {
  goodsId: Goods_ID,
}

export default interface Goods extends Bean {

  /** advertiseId */
  advertiseId?: number;

  /** advertiseId s */
  advertiseIds?: number[];

  /** 数量 代替count */
  amount?: number;

  /** 数量Max */
  amountMax?: number;

  /** 数量Min */
  amountMin?: number;

  /** categorySubId */
  categorySubId?: string;

  /** categorySubIdLike */
  categorySubIdLike?: string;

  /** categorySubId s */
  categorySubIds?: string[];

  /** comPic */
  comPic?: string;

  /** count */
  count?: number;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** goodComments */
  goodComments?: GoodsComment[];

  /** goodsDetail */
  goodsDetail?: string;

  /** goodsDetailLike */
  goodsDetailLike?: string;

  /** 商品ID */
  goodsId?: string;

  /** 商品ID s */
  goodsIds?: string[];

  /** 商品名称 */
  goodsName?: string;

  /** 商品名称Like */
  goodsNameLike?: string;

  /** goodsSerialNumber */
  goodsSerialNumber?: string;

  /** goodsSerialNumberLike */
  goodsSerialNumberLike?: string;

  /** image */
  image?: string;

  /** image1 */
  image1?: string;

  /** image1Like */
  image1Like?: string;

  /** image2 */
  image2?: string;

  /** image2Like */
  image2Like?: string;

  /** image3 */
  image3?: string;

  /** image3Like */
  image3Like?: string;

  /** image4 */
  image4?: string;

  /** image4Like */
  image4Like?: string;

  /** image5 */
  image5?: string;

  /** image5Like */
  image5Like?: string;

  /** 图片地址 */
  images?: string;

  /** 图片地址Like */
  imagesLike?: string;

  /** 是否选择 */
  isCheck?: boolean;

  /** isHot */
  isHot?: boolean;

  /** isOnLine */
  isOnLine?: string;

  /** isOnLineLike */
  isOnLineLike?: string;

  /** mallPrice */
  mallPrice?: number;

  /** name */
  name?: string;

  /** oriPrice */
  oriPrice?: number;

  /** presentPrice */
  presentPrice?: number;

  /** presentPriceMax */
  presentPriceMax?: number;

  /** presentPriceMin */
  presentPriceMin?: number;

  /** 价格 */
  price?: number;

  /** 价格Max */
  priceMax?: number;

  /** 价格Min */
  priceMin?: number;

  /** shopId */
  shopId?: string;

  /** shopId s */
  shopIds?: string[];

  /** state */
  state?: number;

  /** stateMax */
  stateMax?: number;

  /** stateMin */
  stateMin?: number;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

}

