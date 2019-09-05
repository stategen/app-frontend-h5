/**
 *  Do not remove this unless you get business authorization.
 *  Goods
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import React from 'react';
import {connect} from 'dva';
import {GoodsDispatch, goodsEffects, GoodsProps, goodsReducers, GoodsState} from '@i/interfaces/GoodsFaces';
import {ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import StatesAlias from "@i/configs/tradetradeApp-statesAlias";



type GoodsPageProps =AppProps & GoodsProps;

const goodsPage = (props: GoodsPageProps) => {
  const dispatch = props.dispatch;
  const pathname = props.location;
  const goodsArea = props.goodsState.goodsArea;

  return (
    <div>
      {"GoodsPage"}
    </div>
  )
}

const mapStateToProps = (states: StatesAlias & ConnectionPros) : GoodsPageProps =>{
  const props: GoodsPageProps = {
    appState: states.app,
    goodsState: states.goods,
    loading: states.loading,
  }
  return props;
}

const GoodsPage = connect(mapStateToProps)(goodsPage);

export default GoodsPage;
