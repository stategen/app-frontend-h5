/**
 *  Do not remove this unless you get business authorization.
 *  GoodsComment
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import GoodsComment from "../beans/GoodsComment"
import UIColumns from "@utils/UIColumns";

namespace GoodsCommentColumns {

  /** comments  */
  export const comments = {
    key: 'comments',
    dataIndex: 'comments',
    title: 'comments',
    renderColumn: UIColumns.TextareaRender,
    config: {
      rules: [
        {
          max: 65535,
          message: "最大不能超过{max}",
        },
      ],
    },
    nullTitle: '请选择',
    render: (text: any, record: GoodsComment, index: number) =>{
      return comments.renderColumn(record, null, text, index, comments);
    },
  } as ColumnConfig<GoodsComment>;

  /** commentsId  */
  export const commentsId = {
    key: 'commentsId',
    dataIndex: 'commentsId',
    title: 'commentsId',
    renderColumn: UIColumns.InputRender,
    isId: true,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return commentsId.renderColumn(record, null, text, index, commentsId);
    },
  } as ColumnConfig<GoodsComment>;

  /** commentsId s  */
  export const commentsIds = {
    key: 'commentsIds',
    dataIndex: 'commentsIds',
    title: 'commentsId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** commentsLike  */
  export const commentsLike = {
    key: 'commentsLike',
    dataIndex: 'commentsLike',
    title: 'commentsLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** 创建时间  TIMESTAMP*/
  export const createTime = {
    key: 'createTime',
    dataIndex: 'createTime',
    title: '创建时间',
    renderColumn: UIColumns.TimeStampRender,
    hidden: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<GoodsComment>;

  /** 创建时间Max  TIMESTAMP*/
  export const createTimeMax = {
    key: 'createTimeMax',
    dataIndex: 'createTimeMax',
    title: '创建时间Max',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** 创建时间Min  TIMESTAMP*/
  export const createTimeMin = {
    key: 'createTimeMin',
    dataIndex: 'createTimeMin',
    title: '创建时间Min',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<GoodsComment>;

  /** discussTime  TIMESTAMP*/
  export const discussTime = {
    key: 'discussTime',
    dataIndex: 'discussTime',
    title: 'discussTime',
    renderColumn: UIColumns.TimeStampRender,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return discussTime.renderColumn(record, null, text, index, discussTime);
    },
  } as ColumnConfig<GoodsComment>;

  /** discussTimeMax  TIMESTAMP*/
  export const discussTimeMax = {
    key: 'discussTimeMax',
    dataIndex: 'discussTimeMax',
    title: 'discussTimeMax',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** discussTimeMin  TIMESTAMP*/
  export const discussTimeMin = {
    key: 'discussTimeMin',
    dataIndex: 'discussTimeMin',
    title: 'discussTimeMin',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** goodsId  */
  export const goodsId = {
    key: 'goodsId',
    dataIndex: 'goodsId',
    title: 'goodsId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return goodsId.renderColumn(record, null, text, index, goodsId);
    },
  } as ColumnConfig<GoodsComment>;

  /** goodsId s  */
  export const goodsIds = {
    key: 'goodsIds',
    dataIndex: 'goodsIds',
    title: 'goodsId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** sCORE  */
  export const sCORE = {
    key: 'sCORE',
    dataIndex: 'sCORE',
    title: 'sCORE',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return sCORE.renderColumn(record, null, text, index, sCORE);
    },
  } as ColumnConfig<GoodsComment>;

  /** scoreMax  */
  export const scoreMax = {
    key: 'scoreMax',
    dataIndex: 'scoreMax',
    title: 'scoreMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** scoreMin  */
  export const scoreMin = {
    key: 'scoreMin',
    dataIndex: 'scoreMin',
    title: 'scoreMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** 更新时间  TIMESTAMP*/
  export const updateTime = {
    key: 'updateTime',
    dataIndex: 'updateTime',
    title: '更新时间',
    renderColumn: UIColumns.TimeStampRender,
    hidden: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<GoodsComment>;

  /** 更新时间Max  TIMESTAMP*/
  export const updateTimeMax = {
    key: 'updateTimeMax',
    dataIndex: 'updateTimeMax',
    title: '更新时间Max',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** 更新时间Min  TIMESTAMP*/
  export const updateTimeMin = {
    key: 'updateTimeMin',
    dataIndex: 'updateTimeMin',
    title: '更新时间Min',
    noJson: true,
    temporalType: TemporalType.TIMESTAMP,
    format: TIMESTAMP_FORMAT,
    config: {
    },
  } as ColumnConfig<GoodsComment>;

  /** userName  */
  export const userName = {
    key: 'userName',
    dataIndex: 'userName',
    title: 'userName',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 32,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: GoodsComment, index: number) =>{
      return userName.renderColumn(record, null, text, index, userName);
    },
  } as ColumnConfig<GoodsComment>;

  /** userNameLike  */
  export const userNameLike = {
    key: 'userNameLike',
    dataIndex: 'userNameLike',
    title: 'userNameLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<GoodsComment>;


  export const renderColumns = {
    comments,
    commentsId,
    createTime,
    discussTime,
    goodsId,
    sCORE,
    updateTime,
    userName,
  }

}

export default GoodsCommentColumns;