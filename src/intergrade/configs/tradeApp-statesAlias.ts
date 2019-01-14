/**
 *  Do not remove this unless you get business authorization.
 *  tradeApp states alias
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import {MsgState} from "../interfaces/MsgFaces";
import {User_meState} from "../interfaces/User_meFaces";
import {Topic_detail_$topicIdState} from "../interfaces/Topic_detail_$topicIdFaces";
import {AppState} from "../interfaces/AppFaces";
import {HomeState} from "../interfaces/HomeFaces";
import {User_detail_$usernameState} from "../interfaces/User_detail_$usernameFaces";
import {TopicState} from "../interfaces/TopicFaces";
import {Topic_publishState} from "../interfaces/Topic_publishFaces";
import {LoginState} from "../interfaces/LoginFaces";

export default interface StatesAlias {
  msg: MsgState;
  user_me: User_meState;
  topic_detail_$topicId: Topic_detail_$topicIdState;
  app: AppState;
  home: HomeState;
  user_detail_$username: User_detail_$usernameState;
  topic: TopicState;
  topic_publish: Topic_publishState;
  login: LoginState;
}