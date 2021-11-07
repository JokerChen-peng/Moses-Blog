import {useImperativeHandle, useState} from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';
import {parseJsonByString} from 'common/utils'
import React from 'react';
const listData =parseJsonByString(window.localStorage.homeData,[])

export const AreaList =React.forwardRef((props:any,ref:any)=>{
  const [list,setList] = useState<unknown[]>(listData)
  const handleAddBtnClick =() =>{
    const newList = [...list];
    newList.push({});
    setList(newList)
  }
  const handleDeleteBtnClick=(index: number)=>{
    const newList = [...list];
    newList.splice(index,1)
    setList(newList)
  }
  useImperativeHandle(ref,()=>{
 return {
   list
 }
  })
  return (
    <div>
      <List>
        {list.map((_,index)=>(<ListItem key={index}>
          <span>当前区块内容为空</span>
          <span><Button onClick={()=>handleDeleteBtnClick(index)}size="small"type="dashed" danger>删除</Button></span>
        </ListItem>))}
      </List>
      <Button type="primary" ghost onClick={handleAddBtnClick}>新增内容区块</Button>
    </div>
  )
})
const List = styled.ul`
 margin:0;
 padding:0;
 list-style-type:none;
`
const ListItem = styled.li`
  display: flex;
  line-height: 40px;
  margin-bottom:10px;
  padding:0 10px;
  background:#FFF;
  border:1px dashed #ccc;
  color:#999;
  &:last-of-type{
    margin-bottom:20px;
  }
  &>span:first-of-type{
    flex :1;
  }
  &>span:last-child{
    width: 80px;
    text-align:right;
  }
  `
