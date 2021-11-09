import { parseJsonByString } from 'common/utils';
import {produce} from 'immer';
import { CHANGE_SCHEMA } from './constant'
const initalSchema = parseJsonByString(window.localStorage.schema,{
  id:'Page',
  name:'Page',
  attributes:{},
  children:[]
 })
const defaultState ={
 schema:initalSchema
}
const reducer =(state=defaultState,action: any) =>produce(
  state,(draft)=>{
    switch(action.type){
      case CHANGE_SCHEMA:
        draft.schema = action.value;
        break;
      default:
        break;
    }
  }
)
export default reducer