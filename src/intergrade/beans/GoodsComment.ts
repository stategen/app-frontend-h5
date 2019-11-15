/**
 *  Do not remove this unless you get business authorization.
 *  GoodsComment
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** commentsId */
export const GoodsComment_ID: string = 'commentsId';

export default interface GoodsComment extends Bean {

  /** comments */
  comments?: string;

  /** commentsId */
  commentsId?: string;

  /** commentsId s */
  commentsIds?: string[];

  /** commentsLike */
  commentsLike?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** discussTime */
  discussTime?: Date;

  /** discussTimeMax */
  discussTimeMax?: Date;

  /** discussTimeMin */
  discussTimeMin?: Date;

  /** goodsId */
  goodsId?: string;

  /** goodsId s */
  goodsIds?: string[];

  /** sCORE */
  sCORE?: number;

  /** scoreMax */
  scoreMax?: number;

  /** scoreMin */
  scoreMin?: number;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** userName */
  userName?: string;

  /** userNameLike */
  userNameLike?: string;

}

