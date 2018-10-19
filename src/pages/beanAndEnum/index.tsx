import {routerRedux} from 'dva/router'
import {connect} from 'dva'
import {
  beanAndEnumEffects,
  beanAndEnumReducers,
  BeanAndEnumReactComponentFun,
  BeanAndEnumProps
} from './BeanAndEnumFaces';

const beanAndEnumPage: BeanAndEnumReactComponentFun = ({location, dispatch, beanAndEnum: beanAndEnumState, loading}: BeanAndEnumProps) => {
  const {pathname} = location;
  const {currentItem: any, list: anys} = beanAndEnumState;

  return (
    <div>this is BeanAndEnum index</div>
  )
}

export default connect(({beanAndEnum, loading}) => ({beanAndEnum, loading}))(beanAndEnumPage)