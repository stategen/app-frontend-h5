/**
 *  Do not remove this unless you get business authorization.
 *  Floor
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import Floor from "../beans/Floor"
import UIColumns from "@utils/UIColumns";

namespace FloorColumns {

  /** floorGoodss  */
  export const floorGoodss = {
    key: 'floorGoodss',
    dataIndex: 'floorGoodss',
    title: 'floorGoodss',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: Floor, index: number) =>{
      return floorGoodss.renderColumn(record, null, text, index, floorGoodss);
    },
  } as ColumnConfig<Floor>;

  /** advertisePicture  */
  export const advertisePicture = {
    key: 'advertisePicture',
    dataIndex: 'advertisePicture',
    title: 'advertisePicture',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: Floor, index: number) =>{
      return advertisePicture.renderColumn(record, null, text, index, advertisePicture);
    },
  } as ColumnConfig<Floor>;

  /** floorId  */
  export const floorId = {
    key: 'floorId',
    dataIndex: 'floorId',
    title: 'floorId',
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
    render: (text: any, record: Floor, index: number) =>{
      return floorId.renderColumn(record, null, text, index, floorId);
    },
  } as ColumnConfig<Floor>;

  /** advertiseId  */
  export const advertiseId = {
    key: 'advertiseId',
    dataIndex: 'advertiseId',
    title: 'advertiseId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: Floor, index: number) =>{
      return advertiseId.renderColumn(record, null, text, index, advertiseId);
    },
  } as ColumnConfig<Floor>;

  /** orderNo  */
  export const orderNo = {
    key: 'orderNo',
    dataIndex: 'orderNo',
    title: 'orderNo',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: Floor, index: number) =>{
      return orderNo.renderColumn(record, null, text, index, orderNo);
    },
  } as ColumnConfig<Floor>;

  /** floorName  */
  export const floorName = {
    key: 'floorName',
    dataIndex: 'floorName',
    title: 'floorName',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 32,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: Floor, index: number) =>{
      return floorName.renderColumn(record, null, text, index, floorName);
    },
  } as ColumnConfig<Floor>;

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
    render: (text: any, record: Floor, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<Floor>;

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
    render: (text: any, record: Floor, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<Floor>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: Floor, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<Floor>;

  /** floorId s  */
  export const floorIds = {
    key: 'floorIds',
    dataIndex: 'floorIds',
    title: 'floorId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Floor>;

  /** advertiseId s  */
  export const advertiseIds = {
    key: 'advertiseIds',
    dataIndex: 'advertiseIds',
    title: 'advertiseId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<Floor>;

  /** orderNoMin  */
  export const orderNoMin = {
    key: 'orderNoMin',
    dataIndex: 'orderNoMin',
    title: 'orderNoMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Floor>;

  /** orderNoMax  */
  export const orderNoMax = {
    key: 'orderNoMax',
    dataIndex: 'orderNoMax',
    title: 'orderNoMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Floor>;

  /** floorNameLike  */
  export const floorNameLike = {
    key: 'floorNameLike',
    dataIndex: 'floorNameLike',
    title: 'floorNameLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<Floor>;

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
  } as ColumnConfig<Floor>;

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
  } as ColumnConfig<Floor>;

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
  } as ColumnConfig<Floor>;

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
  } as ColumnConfig<Floor>;


  export const renderColumns = {
    floorId,
    advertiseId,
    orderNo,
    floorName,
    createTime,
    updateTime,
  }

}

export default FloorColumns;