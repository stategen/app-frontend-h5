/**
 *  Do not remove this unless you get business authorization.
 *  HomeShop
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import HomeShop from "../beans/HomeShop"
import UIColumns from "@utils/UIColumns";

namespace HomeShopColumns {

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
    render: (text: any, record: HomeShop, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<HomeShop>;

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
  } as ColumnConfig<HomeShop>;

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
  } as ColumnConfig<HomeShop>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: HomeShop, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<HomeShop>;

  /** homeShopId  */
  export const homeShopId = {
    key: 'homeShopId',
    dataIndex: 'homeShopId',
    title: 'homeShopId',
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
    render: (text: any, record: HomeShop, index: number) =>{
      return homeShopId.renderColumn(record, null, text, index, homeShopId);
    },
  } as ColumnConfig<HomeShop>;

  /** homeShopId s  */
  export const homeShopIds = {
    key: 'homeShopIds',
    dataIndex: 'homeShopIds',
    title: 'homeShopId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeShop>;

  /** leaderImage  */
  export const leaderImage = {
    key: 'leaderImage',
    dataIndex: 'leaderImage',
    title: 'leaderImage',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeShop, index: number) =>{
      return leaderImage.renderColumn(record, null, text, index, leaderImage);
    },
  } as ColumnConfig<HomeShop>;

  /** leaderPhone  */
  export const leaderPhone = {
    key: 'leaderPhone',
    dataIndex: 'leaderPhone',
    title: 'leaderPhone',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 16,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeShop, index: number) =>{
      return leaderPhone.renderColumn(record, null, text, index, leaderPhone);
    },
  } as ColumnConfig<HomeShop>;

  /** leaderPhoneLike  */
  export const leaderPhoneLike = {
    key: 'leaderPhoneLike',
    dataIndex: 'leaderPhoneLike',
    title: 'leaderPhoneLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeShop>;

  /** shopId  */
  export const shopId = {
    key: 'shopId',
    dataIndex: 'shopId',
    title: 'shopId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeShop, index: number) =>{
      return shopId.renderColumn(record, null, text, index, shopId);
    },
  } as ColumnConfig<HomeShop>;

  /** shopId s  */
  export const shopIds = {
    key: 'shopIds',
    dataIndex: 'shopIds',
    title: 'shopId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeShop>;

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
    render: (text: any, record: HomeShop, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<HomeShop>;

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
  } as ColumnConfig<HomeShop>;

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
  } as ColumnConfig<HomeShop>;


  export const renderColumns = {
    createTime,
    homeShopId,
    leaderImage,
    leaderPhone,
    shopId,
    updateTime,
  }

}

export default HomeShopColumns;