/**
 *  Do not remove this unless you get business authorization.
 *  HomeWrap
 *  created by [stategen.progen] ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 [stategen.progen]代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import Category from "../beans/Category";
import Floor from "../beans/Floor";
import HomeAdvertise from "../beans/HomeAdvertise";
import HomeGoods from "../beans/HomeGoods";
import HomeShop from "../beans/HomeShop";
import Slide from "../beans/Slide";
import {Bean} from "@utils/DvaUtil";


export default interface HomeWrap extends Bean {

  /** slides */
  slides?: Slide[];

  /** shopInfo */
  shopInfo?: HomeShop;

  /** recommend */
  recommend?: HomeGoods[];

  /** advertesPicture */
  advertesPicture?: HomeAdvertise;

  /** floors */
  floors?: Floor[];

  /** category */
  category?: Category[];

}

