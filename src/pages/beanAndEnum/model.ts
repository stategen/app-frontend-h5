import {modelReduce, abstractModel} from "@utils/DvaUtil";
import {beanAndEnumInitModel} from "@apis/BeanAndEnumInitFaces";
import {BeanAndEnumModel} from "./BeanAndEnumFaces";
import BeanAndEnumApis from "@apis/BeanAndEnumApis";
import ResponseExtend from "@beans/ResponseExtend";
import ResponseStatus from "@enums/ResponseStatus";
import RoleType from "@enums/RoleType";

const beanAndEnumModel: BeanAndEnumModel = <BeanAndEnumModel>beanAndEnumInitModel;

beanAndEnumModel.state = {

}

beanAndEnumModel.reducers = {

}

beanAndEnumModel.effects = {
  * getResponseExtend({payload}, {call, put, select}) {
    const responseExtend: ResponseExtend<number> = yield call(BeanAndEnumApis.getResponseExtend, payload);
    if (responseExtend) {
      //TODO
    } else {
      //TODO
    }
  },

  * getResponseStatus({payload}, {call, put, select}) {
    const responseStatus: ResponseStatus = yield call(BeanAndEnumApis.getResponseStatus, payload);
    if (responseStatus) {
      //TODO
    } else {
      //TODO
    }
  },

  * getRoleType({payload}, {call, put, select}) {
    const roleType: RoleType = yield call(BeanAndEnumApis.getRoleType, payload);
    if (roleType) {
      //TODO
    } else {
      //TODO
    }
  }

}

beanAndEnumModel.subscriptions = {

}

/*modelReduce(abstractModel, beanAndEnumModel);*/

export default beanAndEnumModel;