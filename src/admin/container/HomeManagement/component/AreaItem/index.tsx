import styled from "@emotion/styled"
import { Button,Modal,Select } from "antd"
import { Schema } from "common/type";
import React, { useImperativeHandle } from "react";
import { useState } from "react";
const { Option } =Select
let preSchema:Schema ={} 
interface AreaItemProps{
  index:number;
  item:Schema;
  removeItemFromChildren:(index: number)=>void
}
export const AreaItem =React.forwardRef((props:AreaItemProps,ref) => {
  const {index,item,removeItemFromChildren} = props
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [schema,SetSchema] =useState(item);
  useImperativeHandle(ref,()=>{
    return {
      getSchema:()=>{
        return schema
      },
      resetSchema:() =>{
        SetSchema(item);
        preSchema ={}
      }
    }
     })
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalOk = () => {
    setIsModalVisible(false);
    preSchema ={}
  };
  const handleModalCancel = () => {
    SetSchema(preSchema);
    setIsModalVisible(false);
    preSchema ={}
  };
  const handleSelectorChange =(value: any)=>{
    preSchema ={...schema}
    const newSchema:Schema ={
      name:value,
      attributes:{},
      children:[]
    }
    SetSchema(newSchema)
  }
  return (
    <ListItem>
      <span onClick={showModal}>{schema.name?schema.name+'组件':'当前区块内容为空'}</span>
      <span><Button size="small" type="dashed" onClick={() => removeItemFromChildren(index)} danger>删除</Button></span>
      <Modal title="选择组件" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
       <Select value={schema.name}style={{width:'100%'}} onChange={handleSelectorChange}>
            <Option  value={'Banner'}>Banner 组件</Option>
            <Option  value={'List'}>List 组件</Option>
            <Option  value={'Footer'}>Footer组件</Option>
       </Select>
      </Modal>
    </ListItem>
  )
}
)
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


