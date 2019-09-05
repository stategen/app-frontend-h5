/**
 *  Do not remove this unless you get business authorization.
 *  Goods
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, ConnectionPros, Reducer, AreaState, Subscription,
        Subscriptions, RouterReduxPushPros, SetupParamsFun, mergeObjects, initAreaState, abstractModel} from '@utils/DvaUtil';
import {goodsCustomState,GoodsCustomSubscriptions , GoodsCustomEffects, GoodsCustomReducers} from '@pages/goods/GoodsCustomFaces'
import Goods from "../beans/Goods";
import PageList from "../beans/PageList";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface GoodsInitState extends BaseState {
  goodsArea?: AreaState<Goods>;
}

export type GoodsState = GoodsInitState & Partial<typeof goodsCustomState>;

export interface GoodsInitSubscriptions extends Subscriptions{
}

export type GoodsSubscriptions = GoodsInitSubscriptions & GoodsCustomSubscriptions;

export interface GoodsInitEffects extends Effects {
  /**  */
  getMallGoods?: Effect,
  getMallGoods_next?: Effect,
}

export type GoodsEffects = GoodsInitEffects & GoodsCustomEffects;

interface GoodsInitReducers<S extends GoodsState> extends Reducers<S> {
  /**   成功后 更新状态*/
  getMallGoods_success?: Reducer<GoodsState>,
}

export type GoodsReducers = GoodsInitReducers<GoodsState> & GoodsCustomReducers;

export interface GoodsModel extends IModel<GoodsState, GoodsReducers, GoodsEffects> {
  /** goods */
  namespace?: string;
  /** /goods */
  pathname?: string;
  state?: GoodsState;
  reducers?: GoodsReducers;
  effects?: GoodsEffects;
  subscriptions?: GoodsSubscriptions;
}

export interface GoodsProps extends ConnectionPros {
  goodsState?: GoodsState,
}

export let goodsInitModel: GoodsModel = <GoodsModel>{
  namespace: 'goods',
  pathname: '/goods',
  state: {},
  subscriptions: {},
  reducers: <GoodsReducers>{},
  effects: <GoodsEffects>{},
};

export const goodsGoodsAreaState = {
  areaName: 'goodsArea',
};

goodsInitModel.getInitState = () => {
  const initState = mergeObjects({goodsArea: {...goodsGoodsAreaState, ...initAreaState}},goodsCustomState);
  return initState;
}

goodsInitModel.state=goodsInitModel.getInitState();
goodsInitModel = (mergeObjects(abstractModel, goodsInitModel));

/***把 namespace 带过来，以便生成路径*/
export const goodsEffects = modelPathsProxy<GoodsEffects>(goodsInitModel);

/***把 namespace 带过来，以便生成路径*/
export const goodsReducers = modelPathsProxy<GoodsReducers>(goodsInitModel);

export class GoodsDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: goodsInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /**  */
  static getMallGoods_effect(params: { categoryId?: string, categorySubId?: string, pageSize?: number, pageNum?: number }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: GoodsState) {
    return {
      type: goodsInitModel.namespace + '/getMallGoods',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static getMallGoods_next_effect() {
    return {
      type: goodsInitModel.namespace + '/getMallGoods_next',
      payload: {
      }
    }
  };


  static updateState_reducer(goodsState: GoodsState) {
    return {
      type: goodsInitModel.namespace + '/updateState',
      payload: {
        ...goodsState,
      }
    }
  }

}