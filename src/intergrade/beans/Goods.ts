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

export default interface Goods extends Bean {

  /** goodComments */
  goodComments?: GoodsComment[];

  /** 商品ID */
  goodsId?: string;

  /** 商品名称 */
  goodsName?: string;

  /** categorySubId */
  categorySubId?: string;

  /** 数量 代替count */
  amount?: number;

  /** 价格 */
  price?: number;

  /** 图片地址 */
  images?: string;

  /** 是否选择 */
  isCheck?: boolean;

  /** isHot */
  isHot?: boolean;

  /** advertiseId */
  advertiseId?: number;

  /** presentPrice */
  presentPrice?: number;

  /** image */
  image?: string;

  /** image1 */
  image1?: string;

  /** image2 */
  image2?: string;

  /** image3 */
  image3?: string;

  /** image4 */
  image4?: string;

  /** image5 */
  image5?: string;

  /** isOnLine */
  isOnLine?: string;

  /** goodsSerialNumber */
  goodsSerialNumber?: string;

  /** state */
  state?: number;

  /** shopId */
  shopId?: string;

  /** goodsDetail */
  goodsDetail?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** 商品ID s */
  goodsIds?: string[];

  /** 商品名称Like */
  goodsNameLike?: string;

  /** categorySubId s */
  categorySubIds?: string[];

  /** 数量Min */
  amountMin?: number;

  /** 数量Max */
  amountMax?: number;

  /** 价格Min */
  priceMin?: number;

  /** 价格Max */
  priceMax?: number;

  /** 图片地址Like */
  imagesLike?: string;

  /** advertiseId s */
  advertiseIds?: number[];

  /** presentPriceMin */
  presentPriceMin?: number;

  /** presentPriceMax */
  presentPriceMax?: number;

  /** image1Like */
  image1Like?: string;

  /** image2Like */
  image2Like?: string;

  /** image3Like */
  image3Like?: string;

  /** image4Like */
  image4Like?: string;

  /** image5Like */
  image5Like?: string;

  /** isOnLineLike */
  isOnLineLike?: string;

  /** goodsSerialNumberLike */
  goodsSerialNumberLike?: string;

  /** stateMin */
  stateMin?: number;

  /** stateMax */
  stateMax?: number;

  /** shopId s */
  shopIds?: string[];

  /** goodsDetailLike */
  goodsDetailLike?: string;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** name */
  name?: string;

  /** count */
  count?: number;

  /** oriPrice */
  oriPrice?: number;

  /** mallPrice */
  mallPrice?: number;

  /** comPic */
  comPic?: string;

}

