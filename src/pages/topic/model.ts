import {TopicCommand, topicModel} from "@i/models/TopicModel";
import {TopicDispatch, TopicModel, TopicState} from "@i/interfaces/TopicFaces";
import {topicCustomState} from "@pages/topic/TopicCustomFaces";
import TopicType from "@i/enums/TopicType";
import {PaginationProps} from "antd/lib/pagination";
import {Action, SagaCommands} from "@utils/DvaUtil";



topicModel.effects.getTopicPageList =function* ({type, payload, error}, {put, call, select}): any{
  let topicPageListEffect = TopicCommand.getTopicPageList_effect({type, payload, error}, {put, call, select});




}


export default topicModel;
