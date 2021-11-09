import { Schema } from 'common/type'
import {CHANGE_SCHEMA}from './constant'
export const getChangeSchemaAction = (schema: Schema)=>{
  return  {
    type: CHANGE_SCHEMA,
    value:schema
  }
}