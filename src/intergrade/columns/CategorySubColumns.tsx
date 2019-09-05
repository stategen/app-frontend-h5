/**
 *  Do not remove this unless you get business authorization.
 *  CategorySub
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import CategorySub from "../beans/CategorySub"
import UIColumns from "@utils/UIColumns";

namespace CategorySubColumns {

  /** categorySubId  */
  export const categorySubId = {
    key: 'categorySubId',
    dataIndex: 'categorySubId',
    title: 'categorySubId',
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
    render: (text: any, record: CategorySub, index: number) =>{
      return categorySubId.renderColumn(record, null, text, index, categorySubId);
    },
  } as ColumnConfig<CategorySub>;

  /** categoryId  */
  export const categoryId = {
    key: 'categoryId',
    dataIndex: 'categoryId',
    title: 'categoryId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: CategorySub, index: number) =>{
      return categoryId.renderColumn(record, null, text, index, categoryId);
    },
  } as ColumnConfig<CategorySub>;

  /** subName  */
  export const subName = {
    key: 'subName',
    dataIndex: 'subName',
    title: 'subName',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: CategorySub, index: number) =>{
      return subName.renderColumn(record, null, text, index, subName);
    },
  } as ColumnConfig<CategorySub>;

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
    render: (text: any, record: CategorySub, index: number) =>{
      return comments.renderColumn(record, null, text, index, comments);
    },
  } as ColumnConfig<CategorySub>;

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
    render: (text: any, record: CategorySub, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<CategorySub>;

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
    render: (text: any, record: CategorySub, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<CategorySub>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: CategorySub, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<CategorySub>;

  /** categorySubId s  */
  export const categorySubIds = {
    key: 'categorySubIds',
    dataIndex: 'categorySubIds',
    title: 'categorySubId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<CategorySub>;

  /** categoryId s  */
  export const categoryIds = {
    key: 'categoryIds',
    dataIndex: 'categoryIds',
    title: 'categoryId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<CategorySub>;

  /** subNameLike  */
  export const subNameLike = {
    key: 'subNameLike',
    dataIndex: 'subNameLike',
    title: 'subNameLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<CategorySub>;

  /** commentsLike  */
  export const commentsLike = {
    key: 'commentsLike',
    dataIndex: 'commentsLike',
    title: 'commentsLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<CategorySub>;

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
  } as ColumnConfig<CategorySub>;

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
  } as ColumnConfig<CategorySub>;

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
  } as ColumnConfig<CategorySub>;

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
  } as ColumnConfig<CategorySub>;


  export const renderColumns = {
    categorySubId,
    categoryId,
    subName,
    comments,
    createTime,
    updateTime,
  }

}

export default CategorySubColumns;