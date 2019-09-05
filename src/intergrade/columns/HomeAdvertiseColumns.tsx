/**
 *  Do not remove this unless you get business authorization.
 *  HomeAdvertise
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import HomeAdvertise from "../beans/HomeAdvertise"
import UIColumns from "@utils/UIColumns";

namespace HomeAdvertiseColumns {

  /** homeAdvId  */
  export const homeAdvId = {
    key: 'homeAdvId',
    dataIndex: 'homeAdvId',
    title: 'homeAdvId',
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
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return homeAdvId.renderColumn(record, null, text, index, homeAdvId);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** advertiseId  */
  export const advertiseId = {
    key: 'advertiseId',
    dataIndex: 'advertiseId',
    title: 'advertiseId',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return advertiseId.renderColumn(record, null, text, index, advertiseId);
    },
  } as ColumnConfig<HomeAdvertise>;

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
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<HomeAdvertise>;

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
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** homeAdvId s  */
  export const homeAdvIds = {
    key: 'homeAdvIds',
    dataIndex: 'homeAdvIds',
    title: 'homeAdvId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeAdvertise>;

  /** advertiseId s  */
  export const advertiseIds = {
    key: 'advertiseIds',
    dataIndex: 'advertiseIds',
    title: 'advertiseId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeAdvertise>;

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
  } as ColumnConfig<HomeAdvertise>;

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
  } as ColumnConfig<HomeAdvertise>;

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
  } as ColumnConfig<HomeAdvertise>;

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
  } as ColumnConfig<HomeAdvertise>;

  /** pictureAddress  */
  export const pictureAddress = {
    key: 'pictureAddress',
    dataIndex: 'pictureAddress',
    title: 'pictureAddress',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return pictureAddress.renderColumn(record, null, text, index, pictureAddress);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** toPlace  */
  export const toPlace = {
    key: 'toPlace',
    dataIndex: 'toPlace',
    title: 'toPlace',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 8,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return toPlace.renderColumn(record, null, text, index, toPlace);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** urlType  */
  export const urlType = {
    key: 'urlType',
    dataIndex: 'urlType',
    title: 'urlType',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return urlType.renderColumn(record, null, text, index, urlType);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** pictureAddressLike  */
  export const pictureAddressLike = {
    key: 'pictureAddressLike',
    dataIndex: 'pictureAddressLike',
    title: 'pictureAddressLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeAdvertise>;

  /** toPlaceLike  */
  export const toPlaceLike = {
    key: 'toPlaceLike',
    dataIndex: 'toPlaceLike',
    title: 'toPlaceLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeAdvertise>;

  /** urlType s  */
  export const urlTypes = {
    key: 'urlTypes',
    dataIndex: 'urlTypes',
    title: 'urlType',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeAdvertise>;

  /** tO_PLACE  */
  export const tO_PLACE = {
    key: 'tO_PLACE',
    dataIndex: 'tO_PLACE',
    title: 'tO_PLACE',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return tO_PLACE.renderColumn(record, null, text, index, tO_PLACE);
    },
  } as ColumnConfig<HomeAdvertise>;

  /** pICTURE_ADDRESS  */
  export const pICTURE_ADDRESS = {
    key: 'pICTURE_ADDRESS',
    dataIndex: 'pICTURE_ADDRESS',
    title: 'pICTURE_ADDRESS',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeAdvertise, index: number) =>{
      return pICTURE_ADDRESS.renderColumn(record, null, text, index, pICTURE_ADDRESS);
    },
  } as ColumnConfig<HomeAdvertise>;


  export const renderColumns = {
    homeAdvId,
    advertiseId,
    createTime,
    updateTime,
    pictureAddress,
    toPlace,
    urlType,
    tO_PLACE,
    pICTURE_ADDRESS,
  }

}

export default HomeAdvertiseColumns;