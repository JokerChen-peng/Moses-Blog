import styled from '@emotion/styled'
import { Wrapper } from 'common/utils'
export const Footer = () => {
  return (<Wrapper><FooterStyle>
    <ul>
      <li>
        <a href="/admin.html">进入管理页面</a>
      </li>
    </ul>
    </FooterStyle></Wrapper>)
}

const FooterStyle =styled.div`
 height:60px;
 background:#FFF ;
 &>ul{
   list-style-type:none;
  &>li{
     line-height: 60px;
   &>a{
        color:cornflowerblue;
        text-decoration:none;
     }
   }
 }
`