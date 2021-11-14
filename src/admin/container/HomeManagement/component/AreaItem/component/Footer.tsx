
import styled from '@emotion/styled'
import { Button, Input } from 'antd'
import { Schema } from 'common/type'

export const Footer =(props:any)=>{
  const {attributes,changeAttributes,children,changeChildren} =props
  const {copyright,record} =attributes
  const addItemToChildren =() =>{
    const newChildren =[...children];
    newChildren.push({
      name:'Item',
      attributes:{
        title:'',
        link:''
      },
      children:[]
    });
    changeChildren(newChildren)
  }
  const deleteItemFromChildren=(index:number)=>{
    const newChildren =[...children];
    newChildren.splice(index,1);
    changeChildren(newChildren)
  }
  
  const changeChildrenItem =(index: number,key: string | number,value: any)=>{
    const originItem = children[index];
    const item:any = {...originItem};
    item.attributes[key] = value;
    const newChildren = [...children]
     newChildren.splice(index,1,item)
    changeChildren(newChildren)
  }
  return (<Wrapper>
    <Row>
      <span>版权信息</span>
      <Input 
       value={copyright} 
      placeholder='请输入版权信息' 
       onChange={(e)=>{changeAttributes({copyright:e.target.value})}}
      ></Input>
    </Row>
    <Row>
      <span>备案信息</span>
      <Input 
        value={record}
        placeholder='请输入备案信息'
        onChange={(e)=>{changeAttributes({record:e.target.value})}}
        ></Input>
    </Row>
    <Button type="primary" style={{
      margin:'10px 0'
    }}
    onClick={addItemToChildren}
    >新增列表项</Button>
     {
      children.map(({attributes}:Schema,index:any)=>{
        return(<Area key={index}>
          <Delete
          onClick={()=>deleteItemFromChildren(index)}
          >X</Delete>
          <AreaRow>
             <span>标题</span>
             <Input 
              value={attributes?.title} 
             placeholder='请输入标题' 
               onChange={(e)=>{changeChildrenItem(index,'title',e.target.value)}}
             ></Input>
           </AreaRow>
           <AreaRow>
             <span>链接</span>
             <Input 
              value={attributes?.link} 
             placeholder='请输入链接' 
               onChange={(e)=>{changeChildrenItem(index,'link',e.target.value)}}
             ></Input>
           </AreaRow>
          </Area>)
      })
    }
    </Wrapper>) 
}

const Row = styled.div`
 display: flex;
 margin-top:14px;
 &>span{
  line-height: 32px;
   width:70px;
 }
`


const Area = styled.div`
position: relative;
 margin-bottom: 20px;
 border: 1px dashed #ccc;
 padding: 10px 10px 0 10px;

`
const Wrapper =styled.div`
margin-top:15px;
border-top:1px solid #ccc;
`
const Delete = styled.div`
  position: absolute;
  right: -10px;
  top:-10px;
  background:#F00;
  width: 20px;
  height: 20px;
  line-height: 20px;
  color:#FFF;
  font-size:12px;
  text-align:center;
  border-radius: 10px;
  cursor: pointer;
`
const AreaRow = styled.div`
 display: flex;
 margin-bottom: 10px;
 &>span{
   line-height: 32px;
   width:40px;
 }

`