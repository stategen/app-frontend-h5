/**
 *  Do not remove this unless you get business authorization.
 *  Category
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {categoryInitModel, CategoryModel, CategoryState} from "../interfaces/CategoryFaces";
import CategoryApis from "../apis/CategoryApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import Category from "../beans/Category";

export const categoryModel: CategoryModel = categoryInitModel;

categoryModel.subscriptions.setup = ({dispatch, history}) => {
  history.listen((listener) => {
    const pathname = listener.pathname;
    const keys = [];
    const match = RouteUtil.getMatch(categoryModel.pathname, pathname,keys);
    if (!match) {
      return;
    }
    let payload = {...RouteUtil.getQuery(listener)} ;
    const getCategoryParams = categoryModel.getCategoryInitParamsFn ? categoryModel.getCategoryInitParamsFn({pathname, match, keys}) : null;
    payload = {...payload, ...getCategoryParams}
    dispatch({
      type: 'category/setup',
      payload,
    })
  })
};

categoryModel.effects.setup = function* ({payload}, {call, put, select}) {
  const appState = yield select(_ => _.app);
  const routeOpend = RouteUtil.isRouteOpend(appState.routeOrders, categoryModel.pathname);
  if (!routeOpend) {
    return;
  }

  if (categoryModel.getInitState) {
    const initState = categoryModel.getInitState();
    yield put(CategoryCommand.updateState_type(initState));
  }

  const newPayload = yield CategoryCommand.setup_effect({payload}, {call, put, select});
  yield put(CategoryCommand.setup_success_type(newPayload));
};

categoryModel.reducers.setup_success = (state: CategoryState, {payload}): CategoryState => {
  return mergeObjects(
    state,
    payload,
  );
};

/**  */
categoryModel.effects.getCategory = function* ({payload}, {call, put, select}) {
  const newPayload = yield CategoryCommand.getCategory_effect({payload}, {call, put, select});
  yield put(CategoryCommand.getCategory_success_type(newPayload));
};

categoryModel.reducers.getCategory_success = (state: CategoryState, {payload}): CategoryState => {
  return CategoryCommand.getCategory_success_reducer(state, payload);
};

export class CategoryCommand extends BaseCommand {
  static * setup_effect({payload}, {call, put, select}) {
    let newPayload = {};

    /**  */
    const getCategoryPayload = yield CategoryCommand.getCategory_effect({payload}, {call, put, select});
    newPayload = CategoryCommand.getCategory_success_reducer(<CategoryState>newPayload, getCategoryPayload);
    return newPayload;
  };

  static setup_success_type(payload) {
    return {type: "setup_success", payload: payload};
  }


  /**  */
  static * getCategory_effect({payload}, {call, put, select}) {
    const categorys: Category[] = yield call(CategoryApis.getCategory, payload);

    const newPayload: CategoryState = {
      categoryArea: {
        list: categorys ? categorys : [],
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static getCategory_success_type(payload) {
    return {type: "getCategory_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static getCategory_success_reducer = (state: CategoryState, payload): CategoryState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}