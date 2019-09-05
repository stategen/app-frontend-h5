/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Effect, Effects, Reducers, IModel, BaseState, modelPathsProxy, ConnectionPros, Reducer, AreaState, Subscription,
        Subscriptions, RouterReduxPushPros, SetupParamsFun, mergeObjects, initAreaState, abstractModel} from '@utils/DvaUtil';
import {categoryCustomState,CategoryCustomSubscriptions , CategoryCustomEffects, CategoryCustomReducers} from '@pages/category/CategoryCustomFaces'
import Category from "../beans/Category";
import {routerRedux} from 'dva/router';
import queryString from 'query-string';

export interface CategoryInitState extends BaseState {
  categoryArea?: AreaState<Category>;
}

export type CategoryState = CategoryInitState & Partial<typeof categoryCustomState>;

export interface CategoryInitSubscriptions extends Subscriptions{
  setup?: Subscription;
}

export type CategorySubscriptions = CategoryInitSubscriptions & CategoryCustomSubscriptions;

export interface CategoryInitEffects extends Effects {
  setup?: Effect;
  /**  */
  getCategory?: Effect,
}

export type CategoryEffects = CategoryInitEffects & CategoryCustomEffects;

interface CategoryInitReducers<S extends CategoryState> extends Reducers<S> {
  setup_success?: Reducer<CategoryState>,
  /**   成功后 更新状态*/
  getCategory_success?: Reducer<CategoryState>,
}

export type CategoryReducers = CategoryInitReducers<CategoryState> & CategoryCustomReducers;

export interface CategoryModel extends IModel<CategoryState, CategoryReducers, CategoryEffects> {
  /** category */
  namespace?: string;
  /** /category */
  pathname?: string;
  state?: CategoryState;
  reducers?: CategoryReducers;
  effects?: CategoryEffects;
  subscriptions?: CategorySubscriptions;
  getCategoryInitParamsFn?: SetupParamsFun;
  getInitState?: () => CategoryState;
}

export interface CategoryProps extends ConnectionPros {
  categoryState?: CategoryState,
}

export let categoryInitModel: CategoryModel = <CategoryModel>{
  namespace: 'category',
  pathname: '/category',
  state: {},
  subscriptions: {},
  reducers: <CategoryReducers>{},
  effects: <CategoryEffects>{},
};

export const categoryCategoryAreaState = {
  areaName: 'categoryArea',
};

categoryInitModel.getInitState = () => {
  const initState = mergeObjects({categoryArea: {...categoryCategoryAreaState, ...initAreaState}},categoryCustomState);
  return initState;
}

categoryInitModel.state=categoryInitModel.getInitState();
categoryInitModel = (mergeObjects(abstractModel, categoryInitModel));

/***把 namespace 带过来，以便生成路径*/
export const categoryEffects = modelPathsProxy<CategoryEffects>(categoryInitModel);

/***把 namespace 带过来，以便生成路径*/
export const categoryReducers = modelPathsProxy<CategoryReducers>(categoryInitModel);

export class CategoryDispatch {
  static route(search?: any) {
    const pushRoute: RouterReduxPushPros = {
      pathname: categoryInitModel.pathname,
    };
    if (search != null) {
      pushRoute.search = queryString.stringify(search);
    }
    return routerRedux.push(pushRoute);
  }

  static setup_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: CategoryState) {
    return {
      type: categoryInitModel.namespace + '/setup',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  }

  /**  */
  static getCategory_effect(params?: {}, areaExtraProps__?: AreaState<any>, stateExtraProps__?: CategoryState) {
    return {
      type: categoryInitModel.namespace + '/getCategory',
      payload: {
        ...params,
        areaExtraProps__,
        stateExtraProps__,
      }
    }
  };


  static updateState_reducer(categoryState: CategoryState) {
    return {
      type: categoryInitModel.namespace + '/updateState',
      payload: {
        ...categoryState,
      }
    }
  }

}