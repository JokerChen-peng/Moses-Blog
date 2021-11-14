import styled from '@emotion/styled'
import { Schema } from 'common/type'
import { Wrapper } from 'common/utils'

interface FooterProps {
  schema:Schema
}
export const Footer = ({schema}:FooterProps) => {
  const {attributes = {},children=[] } =schema
  const {copyright,record} =attributes

  return (<Wrapper><FooterStyle>
    <ul>
    {children.map(({attributes:{title,link}},index)=>(
     <li key={index}>
     <a href={link} target="_blank" rel='noreferrer'>{title}</a>
   </li>
    ))}
    </ul>
    <div>{copyright} {record}</div>
    </FooterStyle></Wrapper>)
}

const FooterStyle =styled.div`
 background:#FFF ;
 padding: 0 10px ;
 &>ul{
   list-style-type:none;
   margin: 0;
   padding: 0;
  &>li{
     line-height: 28px;
     font-size:14px;
   &>a{
        color:#545C63;
        text-decoration:none;
     }
   }
 }
 &>div{
    margin-left: 10px;
    font-size: 12px;
    color: #93999F;
    line-height: 24px;
 }
`