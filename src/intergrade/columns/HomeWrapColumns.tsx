/**
 *  Do not remove this unless you get business authorization.
 *  HomeWrap
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import HomeWrap from "../beans/HomeWrap"
import UIColumns from "@utils/UIColumns";

namespace HomeWrapColumns {

  /** advertesPicture  */
  export const advertesPicture = {
    key: 'advertesPicture',
    dataIndex: 'advertesPicture',
    title: 'advertesPicture',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return advertesPicture.renderColumn(record, null, text, index, advertesPicture);
    },
  } as ColumnConfig<HomeWrap>;

  /** category  */
  export const category = {
    key: 'category',
    dataIndex: 'category',
    title: 'category',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return category.renderColumn(record, null, text, index, category);
    },
  } as ColumnConfig<HomeWrap>;

  /** floors  */
  export const floors = {
    key: 'floors',
    dataIndex: 'floors',
    title: 'floors',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return floors.renderColumn(record, null, text, index, floors);
    },
  } as ColumnConfig<HomeWrap>;

  /** recommend  */
  export const recommend = {
    key: 'recommend',
    dataIndex: 'recommend',
    title: 'recommend',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return recommend.renderColumn(record, null, text, index, recommend);
    },
  } as ColumnConfig<HomeWrap>;

  /** shopInfo  */
  export const shopInfo = {
    key: 'shopInfo',
    dataIndex: 'shopInfo',
    title: 'shopInfo',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return shopInfo.renderColumn(record, null, text, index, shopInfo);
    },
  } as ColumnConfig<HomeWrap>;

  /** slides  */
  export const slides = {
    key: 'slides',
    dataIndex: 'slides',
    title: 'slides',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: HomeWrap, index: number) =>{
      return slides.renderColumn(record, null, text, index, slides);
    },
  } as ColumnConfig<HomeWrap>;


  export const renderColumns = {
  }

}

export default HomeWrapColumns;