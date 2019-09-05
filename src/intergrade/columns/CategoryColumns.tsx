/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import Category from "../beans/Category"
import UIColumns from "@utils/UIColumns";

namespace CategoryColumns {

  /** categorySubs  */
  export const categorySubs = {
    key: 'categorySubs',
    dataIndex: 'categorySubs',
    title: 'categorySubs',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: Category, index: number) =>{
      return categorySubs.renderColumn(record, null, text, index, categorySubs);
    },
  } as ColumnConfig<Category>;

  /** 大类目录ID  */
  export const categoryId = {
    key: 'categoryId',
    dataIndex: 'categoryId',
    title: '大类目录ID',
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
    render: (text: any, record: Category, index: number) =>{
      return categoryId.renderColumn(record, null, text, index, categoryId);
    },
  } as ColumnConfig<Category>;

  /** 大类目录名称  */
  export const categoryName = {
    key: 'categoryName',
    dataIndex: 'categoryName',
    title: '大类目录名称',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: Category, index: number) =>{
      return categoryName.renderColumn(record, null, text, index, categoryName);
    },
  } as ColumnConfig<Category>;

  /** 描述  */
  export const comments = {
    key: 'comments',
    dataIndex: 'comments',
    title: '描述',
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
    render: (text: any, record: Category, index: number) =>{
      return comments.renderColumn(record, null, text, index, comments);
    },
  } as ColumnConfig<Category>;

  /** 图片地址  */
  export const image = {
    key: 'image',
    dataIndex: 'image',
    title: '图片地址',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: Category, index: number) =>{
      return image.renderColumn(record, null, text, index, image);
    },
  } as ColumnConfig<Category>;

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
    render: (text: any, record: Category, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<Category>;

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
    render: (text: any, record: Category, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<Category>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: Category, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<Category>;

  /** 大类目录ID s  */
  export const categoryIds = {
    key: 'categoryIds',
    dataIndex: 'categoryIds',
    title: '大类目录ID',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Category>;

  /** 大类目录名称Like  */
  export const categoryNameLike = {
    key: 'categoryNameLike',
    dataIndex: 'categoryNameLike',
    title: '大类目录名称Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Category>;

  /** 描述Like  */
  export const commentsLike = {
    key: 'commentsLike',
    dataIndex: 'commentsLike',
    title: '描述Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Category>;

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
  } as ColumnConfig<Category>;

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
  } as ColumnConfig<Category>;

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
  } as ColumnConfig<Category>;

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
  } as ColumnConfig<Category>;


  export const renderColumns = {
    categoryId,
    categoryName,
    comments,
    image,
    createTime,
    updateTime,
  }

}

export default CategoryColumns;