
import styled from '@emotion/styled'
import { Input, Switch } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
export const Banner =(props:any)=>{
  const {attributes,changeAttributes} =props
  const {title,description,showSmallPic,smallPicUrl,backgroundUrl,backgroundHeight} =attributes

  const handleShowSmallPicChange =(checked:boolean)=>{
    if(!checked){
      changeAttributes({
      showSmallPic:checked,
      smallPicUrl:''
      })
      
    }else{
      changeAttributes({showSmallPic:checked})
    }
   
  }

  return (<div>
    <Row>
      <span>页面标题</span>
      <Input 
       value={title} 
      placeholder='请输入页面标题' 
       onChange={(e)=>{changeAttributes({title:e.target.value})}}
      ></Input>
    </Row>
    <Row>
      <span>页面描述</span>
      <TextArea
        value={description}
        rows={2} placeholder='请输入页面描述'
        onChange={(e)=>{changeAttributes({description:e.target.value})}}
      ></TextArea>
    </Row>
    <Row>
      <span>展示小图</span>
      <Switch checked={showSmallPic} onChange={handleShowSmallPicChange}/>
    </Row>
    {showSmallPic?(<Row>
      <span>小图链接</span>
      <Input 
       value={smallPicUrl} 
      placeholder='请输入小图片的URL地址' 
       onChange={(e)=>{changeAttributes({smallPicUrl:e.target.value})}}
      ></Input>
    </Row>):null}
    <Row>
      <span>背景链接</span>
      <Input 
       value={backgroundUrl} 
      placeholder='请输入背景图的URL地址' 
       onChange={(e)=>{changeAttributes({backgroundUrl:e.target.value})}}
      ></Input>
    </Row>
    <Row>
      <span>背景高度</span>
      <Input
      type="number" 
       value={backgroundHeight} 
      placeholder='请输入背景高度的像素值' 
       onChange={(e)=>{changeAttributes({backgroundHeight:e.target.value})}}
      ></Input>
    </Row>
  </div>) 
}

const Row = styled.div`
 display: flex;
 margin-top:14px;
 &>span{
   width:70px;
 }
`

