import {message} from 'antd'
import ResponseStatus from "@enums/ResponseStatus";
import ResponseExtend from "@beans/ResponseExtend";
import {routerRedux} from 'dva/router';

export default {
  onError(e, dispatch) {
    e.preventDefault();
    message.error(e);
  }
  //   e.preventDefault();
  //   console.error(e);
  //   const responseError = e;
  //   if (responseError && responseError instanceof Object) {
  //     const responseExtend: ResponseExtend<any> = <ResponseExtend<any>> responseError;
  //     if (responseExtend.status === ResponseStatus.NOT_LOGIN) {
  //       message.error(responseExtend.message);
  //       dispatch(routerRedux.push({
  //         pathname: loginInitModel.pathname,
  //       }));
  //     }
  //   } else {
  //     message.error(e);
  //   }
  // },
}
