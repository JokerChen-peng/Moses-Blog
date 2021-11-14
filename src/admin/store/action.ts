
import { Schema } from 'common/type'
import {CHANGE_SCHEMA,ADD_PAGE_CHILDREN, CHANGE_PAGE_CHILD, DELETE_PAGE_CHILD,CHANGE_PAGE_CHILD_POSITION,CHANGE_PAGE_ATTRIBUTE}from './constant'
export const getChangeSchemaAction = (schema: Schema)=>{
  return  {
    type: CHANGE_SCHEMA,
    value:schema
  }
}
export const getAddPageChildrenAction = ()=>{
  return  {
    type: ADD_PAGE_CHILDREN,
    value:{}
  }
}
export const getChangePageChildAction = (value: Schema,index: number)=>{
  return  {
    type: CHANGE_PAGE_CHILD,
    value,
    index
  }
}
export const getDeletePageChildAction = (index: number)=>{
  return  {
    type: DELETE_PAGE_CHILD,
    index
  }
}
export const getChangePageChildPositionAction =(oldIndex: number,newIndex: number)=>{
  return{
    type:CHANGE_PAGE_CHILD_POSITION,
    oldIndex,
    newIndex
  }
}
export const getChangeAttributeAction = (key:string,value:any) =>{
  return {type:CHANGE_PAGE_ATTRIBUTE,key,value}
}
