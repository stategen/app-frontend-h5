/**
 *  Do not remove this unless you get business authorization.
 *  TopicReply
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import User from "../beans/User";
import {Bean} from "@utils/DvaUtil";

/** replyId */
export const TopicReply_ID: string = 'replyId';

export default interface TopicReply extends Bean {

  /** author */
  author?: User;

  /** authorId */
  authorId?: string;

  /** authorId s */
  authorIds?: string[];

  /** content */
  content?: string;

  /** contentLike */
  contentLike?: string;

  /** 创建时间 */
  createTime?: Date;

  /** 创建时间Max */
  createTimeMax?: Date;

  /** 创建时间Min */
  createTimeMin?: Date;

  /** 是否删除(0:正常，1删除) */
  deleteFlag?: number;

  /** id */
  id?: string;

  /** isUped */
  isUped?: boolean;

  /** parentReplyId */
  parentReplyId?: string;

  /** parentReplyId s */
  parentReplyIds?: string[];

  /** replyId */
  replyId?: string;

  /** replyId s */
  replyIds?: string[];

  /** topicId */
  topicId?: string;

  /** topicId s */
  topicIds?: string[];

  /** upCount */
  upCount?: number;

  /** 更新时间 */
  updateTime?: Date;

  /** 更新时间Max */
  updateTimeMax?: Date;

  /** 更新时间Min */
  updateTimeMin?: Date;

  /** ups */
  ups?: string[];

}

