/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import CategorySub from "../beans/CategorySub";
import {Bean} from "@utils/DvaUtil";

/** categoryId */
export const Category_ID: string = 'categoryId';

export const CategoryFields = {
  categoryId: Category_ID,
}

export default interface Category extends Bean {

  /** 大类目录ID */
  categoryId?: string;

  /** 大类目录ID s */
  categoryIds?: string[];

  /** 大类目录名称 */
  categoryName?: string;

  /** 大类目录名称Like */
  categoryNameLike?: string;

  /** categorySubs */
  categorySubs?: CategorySub[];

  /** 描述 */
  comments?: string;

  /** 描述Like */
  commentsLike?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** 图片地址 */
  image?: string;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

}

