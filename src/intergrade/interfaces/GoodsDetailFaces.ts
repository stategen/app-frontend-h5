/**
 *  Do not remove this unless you get business authorization.
 *  GoodsDetail
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, ConnectionPros, Reducer, AreaState, Subscription,
        Subscriptions, RouterReduxPushPros, SetupParamsFun, mergeObjects, initAreaState, abstractModel} from '@utils/DvaUtil';
import {goodsDetailCustomState,GoodsDetailCustomSubscriptions , GoodsDetailCustomEffects, GoodsDetailCustomReducers} from '@pages/goodsDetail/GoodsDetailCustomFaces'
import Goods from "../beans/Goods";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface GoodsDetailInitState extends BaseState {
  goodsArea?: AreaState<Goods>;
}

export type GoodsDetailState = GoodsDetailInitState & Partial<typeof goodsDetailCustomState>;

export interface GoodsDetailInitSubscriptions extends Subscriptions{
}

export type GoodsDetailSubscriptions = GoodsDetailInitSubscriptions & GoodsDetailCustomSubscriptions;

export interface GoodsDetailInitEffects extends Effects {
  /**  */
  getGoodDetailById?: Effect,
}

export type GoodsDetailEffects = GoodsDetailInitEffects & GoodsDetailCustomEffects;

interface GoodsDetailInitReducers<S extends GoodsDetailState> extends Reducers<S> {
  /**   成功后 更新状态*/
  getGoodDetailById_success?: Reducer<GoodsDetailState>,
}

export type GoodsDetailReducers = GoodsDetailInitReducers<GoodsDetailState> & GoodsDetailCustomReducers;

export interface GoodsDetailModel extends IModel<GoodsDetailState, GoodsDetailReducers, GoodsDetailEffects> {
  /** goodsDetail */
  namespace?: string;
  /** /goodsDetail */
  pathname?: string;
  state?: GoodsDetailState;
  reducers?: GoodsDetailReducers;
  effects?: GoodsDetailEffects;
  subscriptions?: GoodsDetailSubscriptions;
}

export interface GoodsDetailProps extends ConnectionPros {
  goodsDetailState?: GoodsDetailState,
}

export let goodsDetailInitModel: GoodsDetailModel = <GoodsDetailModel>{
  namespace: 'goodsDetail',
  pathname: '/goodsDetail',
  state: {},
  subscriptions: {},
  reducers: <GoodsDetailReducers>{},
  effects: <GoodsDetailEffects>{},
};

export const goodsDetailGoodsAreaState = {
  areaName: 'goodsArea',
};

goodsDetailInitModel.getInitState = () => {
  const initState = mergeObjects({goodsArea: {...goodsDetailGoodsAreaState, ...initAreaState}},goodsDetailCustomState);
  return initState;
}

goodsDetailInitModel.state=goodsDetailInitModel.getInitState();
goodsDetailInitModel = (mergeObjects(abstractModel, goodsDetailInitModel));

/***把 namespace 带过来，以便生成路径*/
export const goodsDetailEffects = modelPathsProxy<GoodsDetailEffects>(goodsDetailInitModel);

/***把 namespace 带过来，以便生成路径*/
export const goodsDetailReducers = modelPathsProxy<GoodsDetailReducers>(goodsDetailInitModel);

export class GoodsDetailDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: goodsDetailInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /**  */
  static getGoodDetailById_effect(params: { goodsId?: string }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: GoodsDetailState) {
    return {
      type: goodsDetailInitModel.namespace + '/getGoodDetailById',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  static updateState_reducer(goodsDetailState: GoodsDetailState) {
    return {
      type: goodsDetailInitModel.namespace + '/updateState',
      payload: {
        ...goodsDetailState,
      }
    }
  }

}