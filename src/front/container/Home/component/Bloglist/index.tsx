import styled from '@emotion/styled'
import { Schema } from 'common/type'
import { Wrapper } from 'common/utils'

interface ListProps {
  schema:Schema
}
export const BlogList = ({schema}:ListProps) => {
  const {children=[]} = schema;
  return(<Wrapper>
    <List>
    {children.map(({attributes:{imgUrl,title,description,link}},index)=>(
      <ListItem key={index}>
        <Link href={link} target='_blank' rel='noreferrer'>
        <Img src={imgUrl} alt={title} />
        <Title>{title||'暂无标题'}</Title>
        <Desc>{description||'暂无标题'}</Desc>
        </Link>
    </ListItem>
    ))}
    </List></Wrapper>)
}
 
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
 height:135px;
 margin:0 auto;
 border-radius: 10px;
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
const Link = styled.a`
  color:#333;
  text-decoration: none;
`