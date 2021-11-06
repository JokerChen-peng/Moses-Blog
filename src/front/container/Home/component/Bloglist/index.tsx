import styled from '@emotion/styled'
const listdata:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
export const BlogList = () => {
  return <Blogs><List>
    {listdata.map((item,index)=>(
      <ListItem key={index}><Img src="./logo.png" alt="" />
      <Title>这是标题</Title><Desc>这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述</Desc>
    </ListItem>
    ))}
  </List></Blogs>
}
const Blogs = styled.div`
 position: relative;
 width:1280px;
 margin: 15px auto 0 auto;
 background:#FFF;
`
const List = styled.ul`
 margin:0;
 padding:0 0 10px 0;
 display: flex;
 flex-wrap: wrap;
 list-style-type:none;
`
const ListItem = styled.li`
  width:20%;
  margin-top: 10px;
`
const Img = styled.img`
display: block;
 width: 240px;
 height:180px;
 margin:0 auto;
`
const Title = styled.h4`
 overflow: hidden;
 margin:0;
 padding: 0 10px;
 line-height: 32px;
 font-size: 16px;
 font-weight: normal;
 white-space: nowrap;
 text-overflow: ellipsis;
`
const Desc = styled.p`
 overflow: hidden;
 margin:0;
 padding: 0 10px;
 line-height: 24px;
 font-size: 14px;
 font-weight: normal;
 color:#777;
 text-overflow: ellipsis;
 display: -webkit-box;
 -webkit-box-orient:vertical;
 -webkit-line-clamp:4;
`