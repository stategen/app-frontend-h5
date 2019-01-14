/**
 *  Do not remove this unless you get business authorization.
 *  User_me
 *  init by [stategen.progen] ,can be edit manually ,keep when "keep this"
 *  由 [stategen.progen]代码生成器初始化，可以手工修改,但如果遇到 keep this ,请保留导出设置以备外部自动化调用
 */
import React from 'react';
import {connect} from 'dva';
import {User_meDispatch, user_meEffects, User_meProps, user_meReducers, User_meState} from '@i/interfaces/User_meFaces';
import {ConnectionPros, operateOptions, cleanSelectRowsProps} from "@utils/DvaUtil";
import {AppProps} from "@i/interfaces/AppFaces";
import StatesAlias from "@i/configs/tradeApp-statesAlias";



type User_mePageProps =AppProps & User_meProps;

const user_mePage = (props: User_mePageProps) => {
  const dispatch = props.dispatch;
  const pathname = props.location;
  const user_meArea = props.user_meState.userArea;

  return (
    <div>
      {"User_mePage"}
    </div>
  )
}

const mapStateToProps = (states: StatesAlias & ConnectionPros) : User_mePageProps =>{
  const props: User_mePageProps = {
    appState: states.app,
    user_meState: states.user_me,
    loading: states.loading,
  }
  return props;
}

const User_mePage = connect(mapStateToProps)(user_mePage);

export default User_mePage;
