import styled from '@emotion/styled'
import { Input } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { SetStateAction, useState,forwardRef,useImperativeHandle } from 'react'
const PageSetting = (props: any,ref: any) => {
  const [title,setTitle] = useState(window.localStorage.title||'');
  const [description,setDescription] = useState(window.localStorage.description||'');
  const handleTitleChange =(e: { target: { value: SetStateAction<string> } })=>{
    setTitle(e.target.value)
  }
  const handleDescriptionChange =(e: { target: { value: SetStateAction<string> } })=>{
    setDescription(e.target.value)
  }
  //帮助ref存储值
  useImperativeHandle(ref,()=>{
    return {
      title,
      description
    }
  })
  
  return (
    <div>
      <Row>
        <span>页面标题</span>
        <Input value={title} placeholder='请输入页面标题' onChange={handleTitleChange}></Input>
      </Row>
      <Row>
        <span>页面描述</span>
        <TextArea value={description} rows={2} placeholder='请输入页面描述'
         onChange={handleDescriptionChange}
        ></TextArea>
      </Row>
    </div>
  )
}
export default forwardRef(PageSetting)
const Row = styled.div`
 display: flex;
 margin-bottom:15px;
 &>span{
   width:70px;
 }
`

