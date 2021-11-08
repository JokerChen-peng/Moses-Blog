import {useImperativeHandle, useState,createRef,useMemo} from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';
import React from 'react';
import { AreaItem } from '../AreaItem';
import { Schema } from 'common/type';
 let refs: (React.RefObject<any>)[] =[]
export const AreaList =React.forwardRef((props:any,ref:any)=>{
  const [children,setChildren] = useState<Schema[]>(props.children)
  useMemo(()=>{
    refs = children.map(item=>createRef())
  },[children])
  const addItemToChildren =() =>{
    const newChildren = [...children];
    newChildren.push({name:''});
    setChildren(newChildren)
  }
  const removeItemFromChildren = (index: number) => {
    const newChildren = [...children];
    newChildren.splice(index, 1)
    setChildren(newChildren)
  }
  useImperativeHandle(ref,()=>{
 return {
   getSchemaList:()=>{
     const schemalist: Schema[] =[];
      children.forEach((item,index)=>{
      schemalist.push( refs?.[index]?.current.getSchema())
     })
     return schemalist
   },
   resetSchema:()=>{
     setChildren(props.children)
     children.forEach((item,index)=>{
       refs[index].current.resetSchema()
     })
   }
   
 }
  })
  return (
    <div>
       <List>
        {children.map((item,index)=>(<AreaItem  key={index} index={index}
         item={item}
         removeItemFromChildren={removeItemFromChildren}
          ref={refs[index]}
        />))}
      </List>
      <Button type="primary" ghost onClick={addItemToChildren}>新增内容区块</Button>
    </div>
  )
})

const List = styled.ul`
 margin:0;
 padding:0;
 list-style-type:none;
`