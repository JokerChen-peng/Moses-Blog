import styled from "@emotion/styled"
import { useDispatch, useSelector } from 'react-redux';
import {getChangePageChildAction,getDeletePageChildAction}from '../../store/action'
import { Button,Modal,Select } from "antd"
import {SortableElement} from 'react-sortable-hoc'
import { Schema } from "common/type";
import { useState } from "react";
const { Option } =Select
interface AreaItemProps{
  value:number;
}
const useStore =(index: number)=>{
  const dispatch = useDispatch()
  const pageChild:Schema =useSelector((state)=>{
    return (state as any).homeManagement.schema.children?.[index]||{}
   
 })
 const changePageChild = (temp: Schema)=>{
  dispatch(getChangePageChildAction(temp,index))
}
 const removePageChild = ()=>{
  dispatch(getDeletePageChildAction(index))
 }
 return {pageChild,changePageChild,removePageChild}
 }
 
 export const AreaItem =SortableElement((props:AreaItemProps) => {
  const {value:index} = props;
  const { pageChild,changePageChild,removePageChild } = useStore(index)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [tempPageChild,setTempPageChild] = useState(pageChild);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleModalOk = () => {
    setIsModalVisible(false);
    changePageChild(tempPageChild)
  };
  const handleModalCancel = () => {
    setIsModalVisible(false);
    setTempPageChild(pageChild)
  };
  const handleSelectorChange =(value:string)=>{
    const newSchema:Schema ={
      id:value,
      name:value,
      attributes:{},
      children:[]
    }
    setTempPageChild(newSchema)
  }
  return (
    <ListItem>
      <span onClick={showModal}>{pageChild.name?pageChild.name+'组件':'当前区块内容为空'}</span>
      <span><Button size="small" type="dashed"  danger onClick={removePageChild}>删除</Button></span>
      <Modal title="选择组件" visible={isModalVisible} onOk={handleModalOk} onCancel={handleModalCancel}>
       <Select value={tempPageChild.name}style={{width:'100%'}} onChange={handleSelectorChange}>
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


