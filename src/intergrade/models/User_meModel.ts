/**
 *  Do not remove this unless you get business authorization.
 *  User_me
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {user_meInitModel, User_meModel, User_meState} from "../interfaces/User_meFaces";
import User_meApis from "../apis/User_meApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import RoleType from "../enums/RoleType";
import StatusEnum from "../enums/StatusEnum";
import User from "../beans/User";

export const user_meModel: User_meModel = user_meInitModel;

user_meModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen((listener) => {
    const pathname = listener.pathname;
    const keys = [];
    const match = RouteUtil.getMatch(user_meModel.pathname, pathname,keys);
    if (!match) {
      return;
    }
    let payload = {...RouteUtil.getQuery(listener)} ;
    const getCurrentUserParams = user_meModel.getCurrentUserInitParamsFn ? user_meModel.getCurrentUserInitParamsFn({pathname, match, keys}) : null;
    const getTheUserParams = user_meModel.getTheUserInitParamsFn ? user_meModel.getTheUserInitParamsFn({pathname, match, keys}) : null;
    payload = {...payload, getCurrentUserParams, getTheUserParams}
    dispatch({
      type: 'user_me/setup',
      payload,
    })
  })
};

user_meModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_ => _.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, user_meModel.pathname);
  if (!routeOpend) {
    return;
  }

  if (user_meModel.getInitState) {
    const initState = user_meModel.getInitState();
    yield put(User_meCommand.updateState_type(initState));
  }

  const newPayload = yield User_meCommand.setup_effect({payload}, {call, put, select});
  yield put(User_meCommand.setup_success_type(newPayload));
};

user_meModel.reducers.setup_success = (state: User_meState, {payload}): User_meState => {
  return mergeObjects(
    state,
    payload,
  );
};

/**  */
user_meModel.effects.getCurrentUser = function* ({payload}, {call, put, select}) {
  const newPayload = yield User_meCommand.getCurrentUser_effect({payload}, {call, put, select});
  yield put(User_meCommand.getCurrentUser_success_type(newPayload));
};

user_meModel.reducers.getCurrentUser_success = (state: User_meState, {payload}): User_meState => {
  return User_meCommand.getCurrentUser_success_reducer(state, payload);
};

/**  */
user_meModel.effects.getTheUser = function* ({payload}, {call, put, select}) {
  const newPayload = yield User_meCommand.getTheUser_effect({payload}, {call, put, select});
  yield put(User_meCommand.getTheUser_success_type(newPayload));
};

user_meModel.reducers.getTheUser_success = (state: User_meState, {payload}): User_meState => {
  return User_meCommand.getTheUser_success_reducer(state, payload);
};

/** 修改用户 */
user_meModel.effects.update = function* ({payload}, {call, put, select}) {
  const newPayload = yield User_meCommand.update_effect({payload}, {call, put, select});
  yield put(User_meCommand.update_success_type(newPayload));
};

user_meModel.reducers.update_success = (state: User_meState, {payload}): User_meState => {
  return User_meCommand.update_success_reducer(state, payload);
};

export class User_meCommand extends BaseCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};
    const {getCurrentUserParams = null, getTheUserParams = null, ...lastParams} = payload || {};

    /**  */
    const getCurrentUserPayload = yield User_meCommand.getCurrentUser_effect({payload: {...lastParams, ...getCurrentUserParams}}, {call, put, select});
    newPayload = User_meCommand.getCurrentUser_success_reducer(<User_meState>newPayload, getCurrentUserPayload);
    /**  */
    const getTheUserPayload = yield User_meCommand.getTheUser_effect({payload: {...lastParams, ...getTheUserParams}}, {call, put, select});
    newPayload = User_meCommand.getTheUser_success_reducer(<User_meState>newPayload, getTheUserPayload);
    return newPayload;
  };

  static setup_success_type(payload) {
    return {type: "setup_success", payload: payload};
  }


  /**  */
  static * getCurrentUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(User_meApis.getCurrentUser, payload);

    const newPayload: User_meState = {
      userArea: {
        list: user ? [user] : [],
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static getCurrentUser_success_type(payload) {
    return {type: "getCurrentUser_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static getCurrentUser_success_reducer = (state: User_meState, payload): User_meState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /**  */
  static * getTheUser_effect({payload}, {call, put, select}) {
    const user: User = yield call(User_meApis.getTheUser, payload);

    const newPayload: User_meState = {
      userArea: {
        list: user ? [user] : [],
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static getTheUser_success_type(payload) {
    return {type: "getTheUser_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static getTheUser_success_reducer = (state: User_meState, payload): User_meState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /** 修改用户 */
  static * update_effect({payload}, {call, put, select}) {
    const user: User = yield call(User_meApis.update, payload);
    const oldUserArea = yield select((_) => _.user_me.userArea);
    const users = updateArray(oldUserArea.list, user, "userId");

    const newPayload: User_meState = {
      userArea: {
        list: users,
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static update_success_type(payload) {
    return {type: "update_success", payload: payload};
  }

  /** 修改用户  成功后 更新状态*/
  static update_success_reducer = (state: User_meState, payload): User_meState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}