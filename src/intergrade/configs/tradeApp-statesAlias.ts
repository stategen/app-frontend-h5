/**
 *  Do not remove this unless you get business authorization.
 *  tradeApp states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {AppState} from "../interfaces/AppFaces";
import {CategoryState} from "../interfaces/CategoryFaces";
import {GoodsState} from "../interfaces/GoodsFaces";
import {GoodsDetailState} from "../interfaces/GoodsDetailFaces";
import {HomeState} from "../interfaces/HomeFaces";
import {LoginState} from "../interfaces/LoginFaces";
import {MsgState} from "../interfaces/MsgFaces";
import {TopicState} from "../interfaces/TopicFaces";
import {Topic_detail_$topicIdState} from "../interfaces/Topic_detail_$topicIdFaces";
import {Topic_publishState} from "../interfaces/Topic_publishFaces";
import {User_detail_$usernameState} from "../interfaces/User_detail_$usernameFaces";
import {User_meState} from "../interfaces/User_meFaces";

export default interface StatesAlias {
  app: AppState;
  category: CategoryState;
  goods: GoodsState;
  goodsDetail: GoodsDetailState;
  home: HomeState;
  login: LoginState;
  msg: MsgState;
  topic: TopicState;
  topic_detail_$topicId: Topic_detail_$topicIdState;
  topic_publish: Topic_publishState;
  user_detail_$username: User_detail_$usernameState;
  user_me: User_meState;
}