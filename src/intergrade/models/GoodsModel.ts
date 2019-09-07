/**
 *  Do not remove this unless you get business authorization.
 *  Goods
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {goodsInitModel, GoodsModel, GoodsState} from "../interfaces/GoodsFaces";
import GoodsApis from "../apis/GoodsApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import Goods from "../beans/Goods";
import PageList from "../beans/PageList";

export const goodsModel: GoodsModel = goodsInitModel;

/**  */
goodsModel.effects.getMallGoods = function* ({payload}, {call, put, select}) {
  const newPayload = yield GoodsCommand.getMallGoods_effect({payload}, {call, put, select});
  yield put(GoodsCommand.getMallGoods_success_type(newPayload));
};

goodsModel.effects.getMallGoods_next = function* ({payload}, {call, put, select}) {
  const newPayload = yield GoodsCommand.getMallGoods_next_effect({payload}, {call, put, select});
  yield put(GoodsCommand.getMallGoods_success_type(newPayload));
};

goodsModel.reducers.getMallGoods_success = (state: GoodsState, {payload}): GoodsState => {
  return GoodsCommand.getMallGoods_success_reducer(state, payload);
};

export class GoodsCommand extends BaseCommand {

  /**  */
  static * getMallGoods_effect({payload}, {call, put, select}) {
    const oldGoodsArea = yield select((_) => _.goods.goodsArea);
    payload = {page: DEFAULT_PAGE_NUM, pageSize: DEFAULT_PAGE_SIZE, ...payload};
    const goodsPageList: PageList<Goods> = yield call(GoodsApis.getMallGoods, payload);
    const pagination =goodsPageList!.pagination;
    const goodss = updateArray(oldGoodsArea.list, goodsPageList!.items, "goodsId");

    const newPayload: GoodsState = {
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

  static getMallGoods_success_type(payload) {
    return {type: "getMallGoods_success", payload: payload};
  }

  static * getMallGoods_next_effect({payload}, {call, put, select}) {
    const oldGoodsArea = yield select((_) => _.goods.goodsArea);
    const pagination = oldGoodsArea!.pagination;
    let page = pagination!.current;
    page = (page || 0) + 1;
    const totalPages = Math.trunc(pagination!.total / (pagination!.pageSize || 10)) + 1;
    page = Math.min(page, totalPages)
    payload = {...oldGoodsArea!.queryRule, page};
    const newPayload = yield GoodsCommand.getMallGoods_effect({payload}, {call, put, select});
    return newPayload;
  }

  /**   成功后 更新状态*/
  static getMallGoods_success_reducer = (state: GoodsState, payload): GoodsState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}