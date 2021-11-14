import { useCallback } from 'react';
import {Schema} from 'common/type'
import {useSelector,useDispatch} from 'react-redux'
import { getChangeSchemaAction,getChangeAttributeAction } from 'admin/store/action'
import { parseJsonByString } from 'common/utils';
import styled from '@emotion/styled';
import { Button,Input } from 'antd';

 const useStore =()=>{
  const dispatch = useDispatch()
  const schema:Schema =useSelector((state)=>{
    return (state as any).common.schema
 })
 
 const changeSchema =(schema:Schema)=>{
  dispatch(getChangeSchemaAction(schema))
 }
 const changePageAttribute =(key:string,value:any)=>{
  dispatch(getChangeAttributeAction(key,value))
 }
 return {schema,changePageAttribute,changeSchema}
 }


export const BasicSetting = () => {
   const {schema,changePageAttribute,changeSchema} = useStore()
   const {attributes={}} =schema
   const {title='' } = attributes
  const handleSaveBtnClick = ()=>{
    window.localStorage.schema = JSON.stringify(schema)
  }
  const handleResetBtnClick = ()=>{
    changeSchema(parseJsonByString(window.localStorage.schema,{}))
  }
  
  const handleTitleChange =useCallback((e:any)=>{
    changePageAttribute('title',e.target.value)
  },[changePageAttribute])
  
  return (
   <div>
     <Row>
      <div className='title'>
      页面标题:
      </div>
       <div className='content'>
         <Input value={title} onChange={handleTitleChange}/>
       </div>
     </Row>
   <Buttons>
   <Button type="primary" onClick={handleSaveBtnClick}>保存基础配置</Button>
   <Button type="primary" style={{marginLeft:'20px'}} onClick={handleResetBtnClick}>重置基础配置</Button>
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
const Row = styled.div`
 display: flex;
 .title{
   width:100px;
   line-height: 32px;
 }
 .content{
   flex: 1;
 }
`
