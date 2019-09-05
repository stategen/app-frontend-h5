/**
 *  Do not remove this unless you get business authorization.
 *  GoodsDetail
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import React from 'react';
import {connect} from 'dva';
import {GoodsDetailDispatch, goodsDetailEffects, GoodsDetailProps, goodsDetailReducers, GoodsDetailState} from '@i/interfaces/GoodsDetailFaces';
import {ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import StatesAlias from "@i/configs/tradetradeApp-statesAlias";



type GoodsDetailPageProps =AppProps & GoodsDetailProps;

const goodsDetailPage = (props: GoodsDetailPageProps) => {
  const dispatch = props.dispatch;
  const pathname = props.location;
  const goodsDetailArea = props.goodsDetailState.goodsDetailArea;

  return (
    <div>
      {"GoodsDetailPage"}
    </div>
  )
}

const mapStateToProps = (states: StatesAlias & ConnectionPros) : GoodsDetailPageProps =>{
  const props: GoodsDetailPageProps = {
    appState: states.app,
    goodsDetailState: states.goodsDetail,
    loading: states.loading,
  }
  return props;
}

const GoodsDetailPage = connect(mapStateToProps)(goodsDetailPage);

export default GoodsDetailPage;
