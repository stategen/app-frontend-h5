/**
 *  Do not remove this unless you get business authorization.
 *  CategorySub
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Bean} from "@utils/DvaUtil";

/** categorySubId */
export const CategorySub_ID: string = 'categorySubId';

export default interface CategorySub extends Bean {

  /** categorySubId */
  categorySubId?: string;

  /** categoryId */
  categoryId?: string;

  /** subName */
  subName?: string;

  /** comments */
  comments?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 更新时间 */
  updateTime?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** categorySubId s */
  categorySubIds?: string[];

  /** categoryId s */
  categoryIds?: string[];

  /** subNameLike */
  subNameLike?: string;

  /** commentsLike */
  commentsLike?: string;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

}

