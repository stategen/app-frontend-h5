'use strict';

import Pagination, {PaginationProps} from "antd/lib/pagination/Pagination";
import {Reducer} from "react-router-redux/node_modules/redux";
import {AnyAction} from "../../node_modules/@types/react-router-redux/node_modules/redux";
// import modelMerge from "./model-merge";
// import {call, put, select} from 'redux-saga/effects';
// import {keys} from 'ts-transformer-keys';

/*interfaces*/

export interface Action {
  type: string,
  payload?: any;
  error?: boolean;

  [propName: string]: any,
}

export interface ReduxEffects {
  put?: any,
  call?: any,
  select?: any,

  [reduxEffectName: string]: any;
}

export interface BaseState<T> {
  currentItem?: T;
  list?: T[];
  pagination?: PaginationProps;
}


export interface Reducers<S> {
}

export interface EffectFn {
  ({payload}: Action, {put, call, select}: ReduxEffects): any,
}

export interface Effect {
  ({payload}: Action, {put, call, select}: ReduxEffects): any,
}

export interface Effects {

}

export interface DvaModel {
  pathname?: string;
  state?: any;
  namespace?: string;
  subscriptions?: any;
  reducers?: any;
  effects?: any;
  lockPathsCache?: () => any;
}


export interface IModel<S, R extends Reducers<S>, E extends Effects> extends DvaModel {
  state?: S;
  reducers?: R;
  effects?: E,
}

// export const modelPathsProxy = function <T extends DvaModel>(model: T): T {
//   let result: T = <T> {...<{}>model};
//   let namespace = result.namespace;
//   const handleGet = {
//     get: function (reducersOrEffects, propertyName, proxyed) {
//       let path = reducersOrEffects[propertyName]
//       if (path !== undefined) {
//         return path;
//       }
//       path = namespace + "/" + propertyName;
//       (<any>reducersOrEffects)[propertyName] = path;
//       return path;
//     }
//   };
//   result.reducers = new Proxy({}, handleGet);
//   result.effects = new Proxy({}, handleGet);
//   return result;
// }
export const modelPathsProxy = function <T>(model: DvaModel): T {
  let obj: DvaModel = <DvaModel> {...model};
  let namespace = obj.namespace;

  const handleGet = {
    get: function (reducersOrEffects, propertyName, proxyed) {
      let path = reducersOrEffects[propertyName]
      if (path !== undefined) {
        return path;
      }
      path = namespace + "/" + propertyName;
      (<any>reducersOrEffects)[propertyName] = path;
      return path;
    }
  };

  const result:T  = new Proxy(obj, handleGet);
  return result;
}

export interface QueryReducers<S> extends Reducers<S> {
  updateState?: Reducer<S>,
  querySuccess?: Reducer<S>,
}

export interface ModalReducers<T> {
  showModal?: Reducer<T>;
  hideModal?: Reducer<T>;
  switchIsMotion?: Reducer<T>;
}

export const abstractModel: IModel<any, Reducers<any>, Effects> = {
  state: <BaseState<any>>{
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0,
      pageSize: 10,
    },
  },

  reducers: {
    updateState(state: BaseState<any>, {payload}) {
      return {
        ...state,
        ...payload,
      }
    },

    querySuccess(state: BaseState<any>, {payload}) {
      const {list, pagination} = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
  },
}

export interface Dispatch<A extends Action = AnyAction> {
  <T extends A>(action: T): Promise<T>;
}

export interface LocationEx extends Location{
  query:{},
}

export interface BaseProps{
  loading?: any,
  dispatch?: Dispatch,
  location?: LocationEx,
}

export const modelReduce = (source,target: DvaModel): any => {
  target.state = {...source.state, ...target.state};
  target.subscriptions = {...source.subscriptions, ...target.subscriptions};
  target.reducers = {...source.reducers, ...target.reducers};
  target.effects = {...source.effects, ...target.effects};
  return target;
}

