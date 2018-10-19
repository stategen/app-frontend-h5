/** ---
 *  
 *  created by progen ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 progen代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {Reducer} from 'redux';
import {Effect, Effects, Reducers, IModel, BaseState} from '@utils/DvaUtil';


export interface BeanAndEnumInitState extends BaseState<any> {

}

export interface BeanAndEnumInitEffects extends Effects {
  getResponseExtend?: Effect,
  getResponseStatus?: Effect,
  getRoleType?: Effect,
}

export interface BeanAndEnumInitReducers<S extends BeanAndEnumInitState> extends Reducers<S> {
  getResponseExtend_success?: Reducer<S>,
  getResponseStatus_success?: Reducer<S>,
  getRoleType_success?: Reducer<S>,
}

export interface BeanAndEnumInitModel<S extends BeanAndEnumInitState, R extends BeanAndEnumInitReducers<BeanAndEnumInitState>, E extends BeanAndEnumInitEffects> extends IModel<S, R, E> {
}

export const beanAndEnumInitModel: BeanAndEnumInitModel<BeanAndEnumInitState, BeanAndEnumInitReducers<BeanAndEnumInitState>, BeanAndEnumInitEffects> = {
  namespace: 'beanAndEnum',
  pathname: '/beanAndEnum',
};
