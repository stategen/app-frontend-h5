/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import React from 'react';
import {connect} from 'dva';
import {CategoryDispatch, categoryEffects, CategoryProps, categoryReducers, CategoryState} from '@i/interfaces/CategoryFaces';
import {ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import StatesAlias from "@i/configs/tradetradeApp-statesAlias";



type CategoryPageProps =AppProps & CategoryProps;

const categoryPage = (props: CategoryPageProps) => {
  const dispatch = props.dispatch;
  const pathname = props.location;
  const categoryArea = props.categoryState.categoryArea;

  return (
    <div>
      {"CategoryPage"}
    </div>
  )
}

const mapStateToProps = (states: StatesAlias & ConnectionPros) : CategoryPageProps =>{
  const props: CategoryPageProps = {
    appState: states.app,
    categoryState: states.category,
    loading: states.loading,
  }
  return props;
}

const CategoryPage = connect(mapStateToProps)(categoryPage);

export default CategoryPage;
