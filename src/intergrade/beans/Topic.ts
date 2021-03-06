/**
 *  Do not remove this unless you get business authorization.
 *  Topic
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import TopicType from "../enums/TopicType";
import User from "../beans/User";
import {Bean} from "@utils/DvaUtil";

/** topicId */
export const Topic_ID: string = 'topicId';

export const TopicFields = {
  topicId: Topic_ID,
}

export default interface Topic extends Bean {

  /** author */
  author?: User;

  /** 作者ID */
  authorId?: string;

  /** 作者ID s */
  authorIds?: string[];

  /** 内容 */
  content?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 树(类似部门)主键currOrgId */
  currOrgId?: number;

  /** 所有者currUserId */
  currUserId?: string;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: boolean;

  /** 精华 */
  good?: number;

  /** 精华Max */
  goodMax?: number;

  /** 精华Min */
  goodMin?: number;

  /** inclCurrOrgId */
  inclCurrOrgId?: boolean;

  /** 最后回复 */
  lastReplyAt?: Date;

  /** 最后回复Max */
  lastReplyAtMax?: Date;

  /** 最后回复Min */
  lastReplyAtMin?: Date;

  /** replyCount */
  replyCount?: number;

  /** 标题 */
  title?: string;

  /** 标题Like */
  titleLike?: string;

  /** 置顶 */
  top?: number;

  /** 置顶Max */
  topMax?: number;

  /** 置顶Min */
  topMin?: number;

  /** 主题ID */
  topicId?: string;

  /** 主题ID s */
  topicIds?: string[];

  /** 主题类型 */
  topicType?: TopicType;

  /** 主题类型 s */
  topicTypes?: TopicType[];

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** 浏览次数 */
  visitCount?: number;

  /** 浏览次数Max */
  visitCountMax?: number;

  /** 浏览次数Min */
  visitCountMin?: number;

}

