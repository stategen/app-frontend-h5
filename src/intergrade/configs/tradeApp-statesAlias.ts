/**
 *  Do not remove this unless you get business authorization.
 *  tradeApp states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {TopicState} from "../interfaces/TopicFaces";
import {AppState} from "../interfaces/AppFaces";
import {User_detail_$usernameState} from "../interfaces/User_detail_$usernameFaces";
import {CategoryState} from "../interfaces/CategoryFaces";
import {GoodsState} from "../interfaces/GoodsFaces";
import {GoodsDetailState} from "../interfaces/GoodsDetailFaces";
import {MsgState} from "../interfaces/MsgFaces";
import {HomeState} from "../interfaces/HomeFaces";
import {Topic_publishState} from "../interfaces/Topic_publishFaces";
import {Topic_detail_$topicIdState} from "../interfaces/Topic_detail_$topicIdFaces";
import {User_meState} from "../interfaces/User_meFaces";
import {LoginState} from "../interfaces/LoginFaces";

export default interface StatesAlias {
  topic: TopicState;
  app: AppState;
  user_detail_$username: User_detail_$usernameState;
  category: CategoryState;
  goods: GoodsState;
  goodsDetail: GoodsDetailState;
  msg: MsgState;
  home: HomeState;
  topic_publish: Topic_publishState;
  topic_detail_$topicId: Topic_detail_$topicIdState;
  user_me: User_meState;
  login: LoginState;
}