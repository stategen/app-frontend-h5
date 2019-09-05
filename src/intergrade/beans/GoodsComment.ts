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

  /** commentsId */
  commentsId?: string;

  /** goodsId */
  goodsId?: string;

  /** comments */
  comments?: string;

  /** userName */
  userName?: string;

  /** discussTime */
  discussTime?: Date;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** commentsId s */
  commentsIds?: string[];

  /** goodsId s */
  goodsIds?: string[];

  /** commentsLike */
  commentsLike?: string;

  /** userNameLike */
  userNameLike?: string;

  /** discussTimeMin */
  discussTimeMin?: Date;

  /** discussTimeMax */
  discussTimeMax?: Date;

  /** scoreMin */
  scoreMin?: number;

  /** scoreMax */
  scoreMax?: number;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** sCORE */
  sCORE?: number;

}

