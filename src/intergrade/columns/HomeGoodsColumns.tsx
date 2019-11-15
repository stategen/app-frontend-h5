/**
 *  Do not remove this unless you get business authorization.
 *  HomeGoods
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TIME_FORMAT, DATE_FORMAT, TIMESTAMP_FORMAT, ColumnConfig, KeyValue, TemporalType} from "@utils/DvaUtil";
import HomeGoods from "../beans/HomeGoods"
import UIColumns from "@utils/UIColumns";

namespace HomeGoodsColumns {

  /** advertiseId  */
  export const advertiseId = {
    key: 'advertiseId',
    dataIndex: 'advertiseId',
    title: 'advertiseId',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return advertiseId.renderColumn(record, null, text, index, advertiseId);
    },
  } as ColumnConfig<HomeGoods>;

  /** advertiseId s  */
  export const advertiseIds = {
    key: 'advertiseIds',
    dataIndex: 'advertiseIds',
    title: 'advertiseId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 数量 代替count  */
  export const amount = {
    key: 'amount',
    dataIndex: 'amount',
    title: '数量',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return amount.renderColumn(record, null, text, index, amount);
    },
  } as ColumnConfig<HomeGoods>;

  /** 数量Max  */
  export const amountMax = {
    key: 'amountMax',
    dataIndex: 'amountMax',
    title: '数量Max',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 数量Min  */
  export const amountMin = {
    key: 'amountMin',
    dataIndex: 'amountMin',
    title: '数量Min',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** categorySubId  */
  export const categorySubId = {
    key: 'categorySubId',
    dataIndex: 'categorySubId',
    title: 'categorySubId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return categorySubId.renderColumn(record, null, text, index, categorySubId);
    },
  } as ColumnConfig<HomeGoods>;

  /** categorySubId s  */
  export const categorySubIds = {
    key: 'categorySubIds',
    dataIndex: 'categorySubIds',
    title: 'categorySubId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** comPic  */
  export const comPic = {
    key: 'comPic',
    dataIndex: 'comPic',
    title: 'comPic',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return comPic.renderColumn(record, null, text, index, comPic);
    },
  } as ColumnConfig<HomeGoods>;

  /** count  */
  export const count = {
    key: 'count',
    dataIndex: 'count',
    title: 'count',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return count.renderColumn(record, null, text, index, count);
    },
  } as ColumnConfig<HomeGoods>;

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
    render: (text: any, record: HomeGoods, index: number) =>{
      return createTime.renderColumn(record, null, text, index, createTime);
    },
  } as ColumnConfig<HomeGoods>;

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
  } as ColumnConfig<HomeGoods>;

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
  } as ColumnConfig<HomeGoods>;

  /** 是否删除(0:正常，1删除)  */
  export const deleteFlag = {
    key: 'deleteFlag',
    dataIndex: 'deleteFlag',
    title: '是否删除(0:正常',
    renderColumn: UIColumns.InputRender,
    hidden: true,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return deleteFlag.renderColumn(record, null, text, index, deleteFlag);
    },
  } as ColumnConfig<HomeGoods>;

  /** goodComments  */
  export const goodComments = {
    key: 'goodComments',
    dataIndex: 'goodComments',
    title: 'goodComments',
    renderColumn: UIColumns.InputRender,
    isArray: true,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return goodComments.renderColumn(record, null, text, index, goodComments);
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsDetail  */
  export const goodsDetail = {
    key: 'goodsDetail',
    dataIndex: 'goodsDetail',
    title: 'goodsDetail',
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
    render: (text: any, record: HomeGoods, index: number) =>{
      return goodsDetail.renderColumn(record, null, text, index, goodsDetail);
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsDetailLike  */
  export const goodsDetailLike = {
    key: 'goodsDetailLike',
    dataIndex: 'goodsDetailLike',
    title: 'goodsDetailLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsId  */
  export const goodsId = {
    key: 'goodsId',
    dataIndex: 'goodsId',
    title: 'goodsId',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return goodsId.renderColumn(record, null, text, index, goodsId);
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsId s  */
  export const goodsIds = {
    key: 'goodsIds',
    dataIndex: 'goodsIds',
    title: 'goodsId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 商品名称  */
  export const goodsName = {
    key: 'goodsName',
    dataIndex: 'goodsName',
    title: '商品名称',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return goodsName.renderColumn(record, null, text, index, goodsName);
    },
  } as ColumnConfig<HomeGoods>;

  /** 商品名称Like  */
  export const goodsNameLike = {
    key: 'goodsNameLike',
    dataIndex: 'goodsNameLike',
    title: '商品名称Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsSerialNumber  */
  export const goodsSerialNumber = {
    key: 'goodsSerialNumber',
    dataIndex: 'goodsSerialNumber',
    title: 'goodsSerialNumber',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 64,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return goodsSerialNumber.renderColumn(record, null, text, index, goodsSerialNumber);
    },
  } as ColumnConfig<HomeGoods>;

  /** goodsSerialNumberLike  */
  export const goodsSerialNumberLike = {
    key: 'goodsSerialNumberLike',
    dataIndex: 'goodsSerialNumberLike',
    title: 'goodsSerialNumberLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

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
    render: (text: any, record: HomeGoods, index: number) =>{
      return image.renderColumn(record, null, text, index, image);
    },
  } as ColumnConfig<HomeGoods>;

  /** image1  */
  export const image1 = {
    key: 'image1',
    dataIndex: 'image1',
    title: 'image1',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return image1.renderColumn(record, null, text, index, image1);
    },
  } as ColumnConfig<HomeGoods>;

  /** image1Like  */
  export const image1Like = {
    key: 'image1Like',
    dataIndex: 'image1Like',
    title: 'image1Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** image2  */
  export const image2 = {
    key: 'image2',
    dataIndex: 'image2',
    title: 'image2',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return image2.renderColumn(record, null, text, index, image2);
    },
  } as ColumnConfig<HomeGoods>;

  /** image2Like  */
  export const image2Like = {
    key: 'image2Like',
    dataIndex: 'image2Like',
    title: 'image2Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** image3  */
  export const image3 = {
    key: 'image3',
    dataIndex: 'image3',
    title: 'image3',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return image3.renderColumn(record, null, text, index, image3);
    },
  } as ColumnConfig<HomeGoods>;

  /** image3Like  */
  export const image3Like = {
    key: 'image3Like',
    dataIndex: 'image3Like',
    title: 'image3Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** image4  */
  export const image4 = {
    key: 'image4',
    dataIndex: 'image4',
    title: 'image4',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return image4.renderColumn(record, null, text, index, image4);
    },
  } as ColumnConfig<HomeGoods>;

  /** image4Like  */
  export const image4Like = {
    key: 'image4Like',
    dataIndex: 'image4Like',
    title: 'image4Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** image5  */
  export const image5 = {
    key: 'image5',
    dataIndex: 'image5',
    title: 'image5',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 255,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return image5.renderColumn(record, null, text, index, image5);
    },
  } as ColumnConfig<HomeGoods>;

  /** image5Like  */
  export const image5Like = {
    key: 'image5Like',
    dataIndex: 'image5Like',
    title: 'image5Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 图片地址  */
  export const images = {
    key: 'images',
    dataIndex: 'images',
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
    render: (text: any, record: HomeGoods, index: number) =>{
      return images.renderColumn(record, null, text, index, images);
    },
  } as ColumnConfig<HomeGoods>;

  /** 图片地址Like  */
  export const imagesLike = {
    key: 'imagesLike',
    dataIndex: 'imagesLike',
    title: '图片地址Like',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 是否选择  */
  export const isCheck = {
    key: 'isCheck',
    dataIndex: 'isCheck',
    title: '是否选择',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return isCheck.renderColumn(record, null, text, index, isCheck);
    },
  } as ColumnConfig<HomeGoods>;

  /** isHot  */
  export const isHot = {
    key: 'isHot',
    dataIndex: 'isHot',
    title: 'isHot',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return isHot.renderColumn(record, null, text, index, isHot);
    },
  } as ColumnConfig<HomeGoods>;

  /** isOnLine  */
  export const isOnLine = {
    key: 'isOnLine',
    dataIndex: 'isOnLine',
    title: 'isOnLine',
    renderColumn: UIColumns.InputRender,
    config: {
      rules: [
        {
          max: 8,
          message: "最大不能超过{max}",
        },
      ],
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return isOnLine.renderColumn(record, null, text, index, isOnLine);
    },
  } as ColumnConfig<HomeGoods>;

  /** isOnLineLike  */
  export const isOnLineLike = {
    key: 'isOnLineLike',
    dataIndex: 'isOnLineLike',
    title: 'isOnLineLike',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** mallPrice  */
  export const mallPrice = {
    key: 'mallPrice',
    dataIndex: 'mallPrice',
    title: 'mallPrice',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return mallPrice.renderColumn(record, null, text, index, mallPrice);
    },
  } as ColumnConfig<HomeGoods>;

  /** name  */
  export const name = {
    key: 'name',
    dataIndex: 'name',
    title: 'name',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return name.renderColumn(record, null, text, index, name);
    },
  } as ColumnConfig<HomeGoods>;

  /** orderNo  */
  export const orderNo = {
    key: 'orderNo',
    dataIndex: 'orderNo',
    title: 'orderNo',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return orderNo.renderColumn(record, null, text, index, orderNo);
    },
  } as ColumnConfig<HomeGoods>;

  /** orderNoMax  */
  export const orderNoMax = {
    key: 'orderNoMax',
    dataIndex: 'orderNoMax',
    title: 'orderNoMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** orderNoMin  */
  export const orderNoMin = {
    key: 'orderNoMin',
    dataIndex: 'orderNoMin',
    title: 'orderNoMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** oriPrice  */
  export const oriPrice = {
    key: 'oriPrice',
    dataIndex: 'oriPrice',
    title: 'oriPrice',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return oriPrice.renderColumn(record, null, text, index, oriPrice);
    },
  } as ColumnConfig<HomeGoods>;

  /** presentPrice  */
  export const presentPrice = {
    key: 'presentPrice',
    dataIndex: 'presentPrice',
    title: 'presentPrice',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return presentPrice.renderColumn(record, null, text, index, presentPrice);
    },
  } as ColumnConfig<HomeGoods>;

  /** presentPriceMax  */
  export const presentPriceMax = {
    key: 'presentPriceMax',
    dataIndex: 'presentPriceMax',
    title: 'presentPriceMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** presentPriceMin  */
  export const presentPriceMin = {
    key: 'presentPriceMin',
    dataIndex: 'presentPriceMin',
    title: 'presentPriceMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 价格  */
  export const price = {
    key: 'price',
    dataIndex: 'price',
    title: '价格',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return price.renderColumn(record, null, text, index, price);
    },
  } as ColumnConfig<HomeGoods>;

  /** 价格Max  */
  export const priceMax = {
    key: 'priceMax',
    dataIndex: 'priceMax',
    title: '价格Max',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** 价格Min  */
  export const priceMin = {
    key: 'priceMin',
    dataIndex: 'priceMin',
    title: '价格Min',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** recommendId  */
  export const recommendId = {
    key: 'recommendId',
    dataIndex: 'recommendId',
    title: 'recommendId',
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
    render: (text: any, record: HomeGoods, index: number) =>{
      return recommendId.renderColumn(record, null, text, index, recommendId);
    },
  } as ColumnConfig<HomeGoods>;

  /** recommendId s  */
  export const recommendIds = {
    key: 'recommendIds',
    dataIndex: 'recommendIds',
    title: 'recommendId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

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
    render: (text: any, record: HomeGoods, index: number) =>{
      return shopId.renderColumn(record, null, text, index, shopId);
    },
  } as ColumnConfig<HomeGoods>;

  /** shopId s  */
  export const shopIds = {
    key: 'shopIds',
    dataIndex: 'shopIds',
    title: 'shopId',
    noJson: true,
    isArray: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** state  */
  export const state = {
    key: 'state',
    dataIndex: 'state',
    title: 'state',
    renderColumn: UIColumns.InputRender,
    config: {
    },
    render: (text: any, record: HomeGoods, index: number) =>{
      return state.renderColumn(record, null, text, index, state);
    },
  } as ColumnConfig<HomeGoods>;

  /** stateMax  */
  export const stateMax = {
    key: 'stateMax',
    dataIndex: 'stateMax',
    title: 'stateMax',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

  /** stateMin  */
  export const stateMin = {
    key: 'stateMin',
    dataIndex: 'stateMin',
    title: 'stateMin',
    noJson: true,
    config: {
    },
  } as ColumnConfig<HomeGoods>;

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
    render: (text: any, record: HomeGoods, index: number) =>{
      return updateTime.renderColumn(record, null, text, index, updateTime);
    },
  } as ColumnConfig<HomeGoods>;

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
  } as ColumnConfig<HomeGoods>;

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
  } as ColumnConfig<HomeGoods>;


  export const renderColumns = {
    advertiseId,
    amount,
    categorySubId,
    comPic,
    count,
    createTime,
    goodsDetail,
    goodsId,
    goodsName,
    goodsSerialNumber,
    image,
    image1,
    image2,
    image3,
    image4,
    image5,
    images,
    isCheck,
    isHot,
    isOnLine,
    mallPrice,
    name,
    orderNo,
    oriPrice,
    presentPrice,
    price,
    recommendId,
    shopId,
    state,
    updateTime,
  }

}

export default HomeGoodsColumns;