
import styled from '@emotion/styled'
import { Input,Button, } from 'antd'
import { Schema } from 'common/type';
export const List =(props:any)=>{

const {children=[],changeChildren} = props;
const addItemToChildren =() =>{
  const newChildren =[...children];
  newChildren.push({
    name:'Item',
    attributes:{
      title:'',
      description:'',
      imgeUrl:'',
      link:'',
      width:'200px',
      height:'200px'
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
          <Row>
             <span>标题</span>
             <Input 
              value={attributes?.title} 
             placeholder='请输入标题' 
               onChange={(e)=>{changeChildrenItem(index,'title',e.target.value)}}
             ></Input>
           </Row>
           <Row>
             <span>描述</span>
             <Input 
              value={attributes?.description} 
             placeholder='请输入描述'
               onChange={(e)=>{changeChildrenItem(index,'description',e.target.value)}}
             ></Input>
           </Row>
           <Row>
             <span>图片</span>
             <Input 
              value={attributes?.imgeUrl} 
             placeholder='请输入图片地址' 
               onChange={(e)=>{changeChildrenItem(index,'imgeUrl',e.target.value)}}
             ></Input>
           </Row>
           <Row>
           <span>高度</span>
           <Input 
              value={attributes?.height} 
             placeholder='请输入图片高度' 
             defaultValue='200px'
               onChange={(e)=>{changeChildrenItem(index,'height',e.target.value)}}
             ></Input>
             </Row>
             <Row>
             <span>宽度</span>
              <Input 
              value={attributes?.width} 
             placeholder='请输入图片宽度'
             defaultValue='200px'
               onChange={(e)=>{changeChildrenItem(index,'width',e.target.value)}}
             ></Input>
             </Row>
           <Row>
             <span>链接</span>
             <Input 
              value={attributes?.link} 
             placeholder='请输入跳转' 
               onChange={(e)=>{changeChildrenItem(index,'link',e.target.value)}}
             ></Input>
           </Row>
           <Row>
           </Row>
          </Area>)
      })
    }
    </Wrapper>) 
}

const Row = styled.div`
 display: flex;
 margin-bottom: 10px;
 &>span{
   line-height: 32px;
   width:40px;
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