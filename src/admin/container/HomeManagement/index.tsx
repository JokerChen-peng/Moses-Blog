import {Schema} from 'common/type'
import {useSelector,useDispatch} from 'react-redux'

import { AreaList } from './component/AreaList';
import { getChangeSchemaAction } from 'admin/store/action'

import { parseJsonByString } from 'common/utils';
import styled from '@emotion/styled';
import { Button } from 'antd';
import axios from 'axios';
 const useStore =()=>{
  const dispatch = useDispatch()
  const schema:Schema =useSelector((state)=>{
    return (state as any).common.schema
 })
 const changeSchema =(schema:Schema)=>{
  dispatch(getChangeSchemaAction(schema))
 }
 return {schema,changeSchema}
 }


export const HomeManagement = () => {
   const {schema,changeSchema} = useStore()
  
 
  const handleSaveBtnClick = ()=>{
    axios.post('/api/schema/save',{
      schema:JSON.stringify(schema)
    }).then(()=>{})
    
  }
  const handleResetBtnClick = ()=>{
    axios.get('/api/schema/getLastestOne').then((response)=>{
      const data = response?.data?.data
      data&&changeSchema(parseJsonByString(data.schema,{}))
    })
  }
  return (
   <div>
     <AreaList/>
   <Buttons>
   <Button type="primary" onClick={handleSaveBtnClick}>保存区块配置</Button>
   <Button type="primary" style={{marginLeft:'20px'}} onClick={handleResetBtnClick}>重置区块配置</Button>
   </Buttons>
   </div>
  );

}
const Buttons =styled.div`
 padding-top: 20px ;
 margin-top: 20px;
 border-top: 1px dashed #ccc;
 text-align:center;
`
