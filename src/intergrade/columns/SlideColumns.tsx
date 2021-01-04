/**
 *  Do not remove this unless you get business authorization.
 *  Slide
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import Slide from "../beans/Slide"
import UIColumns from "@utils/UIColumns";

namespace SlideColumns {

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
    render: (text: any, record: Slide, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<Slide>;

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
  } as ColumnConfig<Slide>;

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
  } as ColumnConfig<Slide>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: Slide, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<Slide>;

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
    render: (text: any, record: Slide, index: number) =>{
      return goodsId.renderColumn(record, null, text, index, goodsId);
    },
  } as ColumnConfig<Slide>;

  /** goodsId s  */
  export const goodsIds = {
    key: 'goodsIds',
    dataIndex: 'goodsIds',
    title: 'goodsId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** image  */
  export const image = {
    key: 'image',
    dataIndex: 'image',
    title: 'image',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: Slide, index: number) =>{
      return image.renderColumn(record, null, text, index, image);
    },
  } as ColumnConfig<Slide>;

  /** orderNo  */
  export const orderNo = {
    key: 'orderNo',
    dataIndex: 'orderNo',
    title: 'orderNo',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: Slide, index: number) =>{
      return orderNo.renderColumn(record, null, text, index, orderNo);
    },
  } as ColumnConfig<Slide>;

  /** orderNoMax  */
  export const orderNoMax = {
    key: 'orderNoMax',
    dataIndex: 'orderNoMax',
    title: 'orderNoMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** orderNoMin  */
  export const orderNoMin = {
    key: 'orderNoMin',
    dataIndex: 'orderNoMin',
    title: 'orderNoMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** orderNo s  */
  export const orderNos = {
    key: 'orderNos',
    dataIndex: 'orderNos',
    title: 'orderNo',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** slideId  */
  export const slideId = {
    key: 'slideId',
    dataIndex: 'slideId',
    title: 'slideId',
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
    render: (text: any, record: Slide, index: number) =>{
      return slideId.renderColumn(record, null, text, index, slideId);
    },
  } as ColumnConfig<Slide>;

  /** slideId s  */
  export const slideIds = {
    key: 'slideIds',
    dataIndex: 'slideIds',
    title: 'slideId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Slide>;

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
    render: (text: any, record: Slide, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<Slide>;

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
  } as ColumnConfig<Slide>;

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
  } as ColumnConfig<Slide>;

  /** urlType  */
  export const urlType = {
    key: 'urlType',
    dataIndex: 'urlType',
    title: 'urlType',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: Slide, index: number) =>{
      return urlType.renderColumn(record, null, text, index, urlType);
    },
  } as ColumnConfig<Slide>;

  /** urlTypeMax  */
  export const urlTypeMax = {
    key: 'urlTypeMax',
    dataIndex: 'urlTypeMax',
    title: 'urlTypeMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** urlTypeMin  */
  export const urlTypeMin = {
    key: 'urlTypeMin',
    dataIndex: 'urlTypeMin',
    title: 'urlTypeMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Slide>;

  /** urlType s  */
  export const urlTypes = {
    key: 'urlTypes',
    dataIndex: 'urlTypes',
    title: 'urlType',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Slide>;


  export const renderColumns = {
    createTime,
    goodsId,
    image,
    orderNo,
    slideId,
    updateTime,
    urlType,
  }

}

export default SlideColumns;