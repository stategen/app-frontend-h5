/**
 *  Do not remove this unless you get business authorization.
 *  GoodsDetail
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {goodsDetailInitModel, GoodsDetailModel, GoodsDetailState} from "../interfaces/GoodsDetailFaces";
import GoodsDetailApis from "../apis/GoodsDetailApis";
import {updateArray, delateArray, mergeObjects, AreaState, BaseCommand, DEFAULT_PAGE_NUM, DEFAULT_PAGE_SIZE} from "@utils/DvaUtil";
import RouteUtil from "@utils/RouteUtil";
import Goods from "../beans/Goods";

export const goodsDetailModel: GoodsDetailModel = goodsDetailInitModel;

/**  */
goodsDetailModel.effects.getGoodDetailById = function* ({payload}, {call, put, select}) {
  const newPayload = yield GoodsDetailCommand.getGoodDetailById_effect({payload}, {call, put, select});
  yield put(GoodsDetailCommand.getGoodDetailById_success_type(newPayload));
};

goodsDetailModel.reducers.getGoodDetailById_success = (state: GoodsDetailState, {payload}): GoodsDetailState => {
  return GoodsDetailCommand.getGoodDetailById_success_reducer(state, payload);
};

export class GoodsDetailCommand extends BaseCommand {

  /**  */
  static * getGoodDetailById_effect({payload}, {call, put, select}) {
    const goods: Goods = yield call(GoodsDetailApis.getGoodDetailById, payload);

    const newPayload: GoodsDetailState = {
      goodsArea: {
        list: goods ? [goods] : [],
        ...payload!.areaExtraProps__,
      },
      ...payload!.stateExtraProps__,
    };
    return newPayload;
  };

  static getGoodDetailById_success_type(payload) {
    return {type: "getGoodDetailById_success", payload: payload};
  }

  /**   成功后 更新状态*/
  static getGoodDetailById_success_reducer = (state: GoodsDetailState, payload): GoodsDetailState => {
    return mergeObjects(
      state,
      payload,
    );
  };
}