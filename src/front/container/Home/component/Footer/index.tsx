import styled from '@emotion/styled'
export const Footer = () => {
  return (<FooterStyle>
    <ul>
      <li>
        <a href="/admin.html">进入管理页面</a>
      </li>
    </ul>
    </FooterStyle>)
}

const FooterStyle =styled.div`
 width:1280px;
 height:60px;
 margin: 0 auto 10px auto;
 background:#FFF ;
 & > ul{
   list-style-type:none;
  & > li{
     line-height: 60px;
   & > a{
        color:cornflowerblue;
        text-decoration:none;
     }
   }
 }
`