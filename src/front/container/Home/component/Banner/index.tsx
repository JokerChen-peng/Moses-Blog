import styled from '@emotion/styled'
import { Wrapper } from 'common/utils'
export const Banner = () => {
  const title = window.localStorage.title||'Moses 的个人博客'
  const desc = window.localStorage.description||'大三学生热爱前端，希望我的博客可以帮助到你'
  return (<Wrapper><Container><Person><Avatar src='https://serverless-project-static.oss-cn-beijing.aliyuncs.com/images/avatar.jpg' alt='Moses avatar'></Avatar>
  <Title>{title} </Title><Desc>{desc}</Desc>
</Person>
</Container></Wrapper>)
}
const Container = styled.div`
position: relative;
 height:530px;
 background-image:url('https://serverless-project-static.oss-cn-beijing.aliyuncs.com/images/bg.jpeg');
 background-repeat: no-repeat;
 background-size: contain;

`

const Person = styled.div`
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  height: 150px;
 `
const Avatar = styled.img`
 position: absolute;
 top:-70px;
 left:40px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
 `
const Title = styled.div`
  line-height: 50px;
  margin-top: 10px;
  margin-left:280px;
  font-size: 28px;
  color:#000
 `
const Desc = styled.div`
  line-height:32px;
  margin-right:30px;
  margin-left:280px;
  font-size:18px;
  color:#333
 `