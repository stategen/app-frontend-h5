/** ---
 *  
 *  created by progen ,do not edit it manually otherwise your code will be override by next call progen,
 *  由 progen代码生成器创建，不要手动修改,否则将在下次创建时自动覆盖
 */
import ResponseStatus from "../enums/ResponseStatus";

export default interface ResponseExtend<T> {

  code?: number;

  exeptionClass?: string;

  data?: T;

  status?: ResponseStatus;

  message?: string;

  success?: boolean;


}
