/** ---
 *  
 *  initialize by progen , can be edit it manually
 *  由 progen代码生成器初始化，可以任意修改
 */
import {BeanAndEnumInitEffects, beanAndEnumInitModel, BeanAndEnumInitReducers, BeanAndEnumInitState, BeanAndEnumInitModel} from "@apis/BeanAndEnumInitFaces";
import {QueryReducers, ModalReducers, modelPathsProxy, BaseProps} from "@utils/DvaUtil";

export interface BeanAndEnumState extends BeanAndEnumInitState {

}

export interface BeanAndEnumReducers extends BeanAndEnumInitReducers<BeanAndEnumState>, ModalReducers<BeanAndEnumState>, QueryReducers<BeanAndEnumState> {

}

/***把 namespace 带过来，以便生成路径*/
export const beanAndEnumReducers =modelPathsProxy<BeanAndEnumReducers>(beanAndEnumInitModel);

export interface BeanAndEnumEffects extends BeanAndEnumInitEffects {

}

/***把 namespace 带过来，以便生成路径*/
export const beanAndEnumEffects =modelPathsProxy<BeanAndEnumEffects>(beanAndEnumInitModel);

export interface BeanAndEnumModel extends BeanAndEnumInitModel<BeanAndEnumState, BeanAndEnumReducers, BeanAndEnumEffects> {

}

export interface BeanAndEnumProps extends BaseProps{
  beanAndEnum?: BeanAndEnumState,
}

export interface BeanAndEnumReactComponentFun{
  (props:BeanAndEnumProps):any,
}
