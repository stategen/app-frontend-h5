/**
 *  Do not remove this unless you get business authorization.
 *  Home
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {homeInitModel, HomeModel, HomeState} from "../interfaces/HomeFaces";
import HomeApis from "../apis/HomeApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import Goods from "../beans/Goods";
import HomeWrap from "../beans/HomeWrap";
import PageList from "../beans/PageList";

export const homeModel: HomeModel = homeInitModel;

/**  */
homeModel.effects.homePageBelowConten = function* ({payload}, {call, put, select}) {
  const newPayload = yield HomeCommand.homePageBelowConten_effect({payload}, {call, put, select});
  yield put(HomeCommand.homePageBelowConten_success_type(newPayload));
};

homeModel.effects.homePageBelowConten_next = function* ({payload}, {call, put, select}) {
  const newPayload = yield HomeCommand.homePageBelowConten_next_effect({payload}, {call, put, select});
  yield put(HomeCommand.homePageBelowConten_success_type(newPayload));
};

homeModel.reducers.homePageBelowConten_success = (state: HomeState, {payload}): HomeState => {
  return HomeCommand.homePageBelowConten_success_reducer(state, payload);
};

/**  */
homeModel.effects.homePageContent = function* ({payload}, {call, put, select}) {
  const newPayload = yield HomeCommand.homePageContent_effect({payload}, {call, put, select});
  yield put(HomeCommand.homePageContent_success_type(newPayload));
};

homeModel.reducers.homePageContent_success = (state: HomeState, {payload}): HomeState => {
  return HomeCommand.homePageContent_success_reducer(state, payload);
};

export class HomeCommand extends BaseCommand {

  /**  */
  static * homePageBelowConten_effect({payload}, {call, put, select}) {
    const oldGoodsArea = yield select((_) => _.home.goodsArea);
    payload = {page: DEFAULT_PAGE_NUM, pageSize: DEFAULT_PAGE_SIZE, ...payload};
    const goodsPageList: PageList<Goods> = yield call(HomeApis.homePageBelowConten, payload);
    const pagination =goodsPageList!.pagination;
    const goodss = updateArray(oldGoodsArea.list, goodsPageList!.items, "goodsId");

    const newPayload: HomeState = {
      goodsArea: {
        list: goodss,
        pagination,
        queryRule: payload,
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static homePageBelowConten_success_type(payload) {
    return {type: "homePageBelowConten_success", payload: payload};
  }

  static * homePageBelowConten_next_effect({payload}, {call, put, select}) {
    const oldGoodsArea = yield select((_) => _.home.goodsArea);
    const pagination = oldGoodsArea!.pagination;
    let page = pagination!.current;
    page = (page || 0) + 1;
    const totalPages = Math.trunc(pagination!.total / (pagination!.pageSize || 10)) + 1;
    page = Math.min(page, totalPages)
    payload = {...oldGoodsArea!.queryRule, page};
    const newPayload = yield HomeCommand.homePageBelowConten_effect({payload}, {call, put, select});
    return newPayload;
  }

  /**   成功后 更新状态*/
  static homePageBelowConten_success_reducer = (state: HomeState, payload): HomeState => {
    return mergeObjects(
      state,
      payload,
    );
  };

  /**  */
  static * homePageContent_effect({payload}, {call, put, select}) {
    const homeWrap: HomeWrap = yield call(HomeApis.homePageContent, payload);

    const newPayload: HomeState = {
      homeWrapArea: {
        list: homeWrap ? [homeWrap] : [],
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static homePageContent_success_type(payload) {
    return {type: "homePageContent_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static homePageContent_success_reducer = (state: HomeState, payload): HomeState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}