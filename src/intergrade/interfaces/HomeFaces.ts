/**
 *  Do not remove this unless you get business authorization.
 *  Home
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, ConnectionPros, Reducer, AreaState, Subscription,
        Subscriptions, RouterReduxPushPros, SetupParamsFun, mergeObjects, initAreaState, abstractModel} from '@utils/DvaUtil';
import {homeCustomState,HomeCustomSubscriptions , HomeCustomEffects, HomeCustomReducers} from '@pages/home/HomeCustomFaces'
import Goods from "../beans/Goods";
import HomeWrap from "../beans/HomeWrap";
import PageList from "../beans/PageList";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface HomeInitState extends BaseState {
  goodsArea?: AreaState<Goods>;
  homeWrapArea?: AreaState<HomeWrap>;
}

export type HomeState = HomeInitState & Partial<typeof homeCustomState>;

export interface HomeInitSubscriptions extends Subscriptions{
}

export type HomeSubscriptions = HomeInitSubscriptions & HomeCustomSubscriptions;

export interface HomeInitEffects extends Effects {
  /**  */
  homePageBelowConten?: Effect,
  homePageBelowConten_next?: Effect,
  /**  */
  homePageContent?: Effect,
}

export type HomeEffects = HomeInitEffects & HomeCustomEffects;

interface HomeInitReducers<S extends HomeState> extends Reducers<S> {
  /**   成功后 更新状态*/
  homePageBelowConten_success?: Reducer<HomeState>,
  /**   成功后 更新状态*/
  homePageContent_success?: Reducer<HomeState>,
}

export type HomeReducers = HomeInitReducers<HomeState> & HomeCustomReducers;

export interface HomeModel extends IModel<HomeState, HomeReducers, HomeEffects> {
  /** home */
  namespace?: string;
  /** /home */
  pathname?: string;
  state?: HomeState;
  reducers?: HomeReducers;
  effects?: HomeEffects;
  subscriptions?: HomeSubscriptions;
}

export interface HomeProps extends ConnectionPros {
  homeState?: HomeState,
}

export let homeInitModel: HomeModel = <HomeModel>{
  namespace: 'home',
  pathname: '/home',
  state: {},
  subscriptions: {},
  reducers: <HomeReducers>{},
  effects: <HomeEffects>{},
};

export const homeGoodsAreaState = {
  areaName: 'goodsArea',
};

export const homeHomeWrapAreaState = {
  areaName: 'homeWrapArea',
};

homeInitModel.getInitState = () => {
  const initState = mergeObjects({goodsArea: {...homeGoodsAreaState, ...initAreaState}, homeWrapArea: {...homeHomeWrapAreaState, ...initAreaState}},homeCustomState);
  return initState;
}

homeInitModel.state=homeInitModel.getInitState();
homeInitModel = (mergeObjects(abstractModel, homeInitModel));

/***把 namespace 带过来，以便生成路径*/
export const homeEffects = modelPathsProxy<HomeEffects>(homeInitModel);

/***把 namespace 带过来，以便生成路径*/
export const homeReducers = modelPathsProxy<HomeReducers>(homeInitModel);

export class HomeDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: homeInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  /**  */
  static homePageBelowConten_effect(params: { pageSize?: number, pageNum?: number }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: HomeState) {
    return {
      type: homeInitModel.namespace + '/homePageBelowConten',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };

  static homePageBelowConten_next_effect() {
    return {
      type: homeInitModel.namespace + '/homePageBelowConten_next',
      payload: {
      }
    }
  };


  /**  */
  static homePageContent_effect(params: { lon?: number, lat?: number }, areaExtraProps__?: AreaState<any>, stateExtraProps__?: HomeState) {
    return {
      type: homeInitModel.namespace + '/homePageContent',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  static updateState_reducer(homeState: HomeState) {
    return {
      type: homeInitModel.namespace + '/updateState',
      payload: {
        ...homeState,
      }
    }
  }

}