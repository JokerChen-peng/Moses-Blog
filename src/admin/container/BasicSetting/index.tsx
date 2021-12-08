import { useCallback } from 'react';
import {Schema} from 'common/type';
import  axios from 'axios';
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
   const {title='',keyword='',desc='' } = attributes
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
  
   const handleTitleChange =useCallback((e:any)=>{
     changePageAttribute('title',e.target.value)
   },[changePageAttribute])
   const handleKeywordsChange =useCallback((e:any)=>{
    changePageAttribute('keyword',e.target.value)
  },[changePageAttribute])
   const handleDescChange =useCallback((e:any)=>{
    changePageAttribute('desc',e.target.value)
  },[changePageAttribute])

  
  return (
   <div>
     <Row>
      <div className='title'>
      网站标题:
      </div>
       <div className='content'>
         <Input value={title} onChange={handleTitleChange}/>
       </div>
     </Row>
     <Row>
      <div className='title'>
      网站关键词:
      </div>
       <div className='content'>
         <Input value={keyword} onChange={handleKeywordsChange}/>
       </div>
     </Row>
     <Row>
      <div className='title'>
      网站描述:
      </div>
       <div className='content'>
         <Input value={desc} onChange={handleDescChange}/>
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
 margin-bottom:20px;
 display: flex;
 .title{
   width:100px;
   line-height: 32px;
 }
 .content{
   flex: 1;
 }
`
