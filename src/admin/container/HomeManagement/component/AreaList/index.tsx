import {useImperativeHandle,useEffect, useState,createRef,useMemo} from 'react';
import { Button } from 'antd';
import { ReactSortable } from "react-sortablejs";
import styled from '@emotion/styled';
import React from 'react';
import { AreaItem } from '../AreaItem';
import { Schema } from 'common/type';
 let refs: (React.RefObject<any>)[] =[]
export const AreaList =React.forwardRef((props:{children:Schema[]},ref:any)=>{
  const [children,setChildren] =useState<Schema[]>(props.children)
  useEffect(()=>{
    setChildren(props.children)
  },[props.children])
  useMemo(()=>{
    refs = children.map(item=>createRef())
  },[children]);
  const changeAreaItem =(item: Schema,index: number) =>{
    const newChildren = [...children];
     newChildren.splice(index, 1,item)
    setChildren(newChildren)
  }
  const addItemToChildren =() =>{
    const newChildren = [...children];
    newChildren.push({id:''});
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
   }
   
 }
  })
  return (
    <div>
       <List>
         <ReactSortable list={children} setList={setChildren}>
        {children.map((item,index)=>(<AreaItem  key={index} index={index}
         item={item}
         removeItemFromChildren={removeItemFromChildren}
         changeAreaItem={changeAreaItem}
          ref={refs[index]}
        />))}
        </ReactSortable>
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