import styled from '@emotion/styled'
import { Schema } from 'common/type'
import { Wrapper } from 'common/utils'
interface BannerProps {
  schema:Schema
}
type BackgroundProps = {
  backgroundUrl?: string
  backgroundHeight?: number
}
export const Banner = ({schema}:BannerProps) => {
  const {attributes = {} } =schema
  const {title,description,showSmallPic,smallPicUrl,backgroundUrl,backgroundHeight} =attributes

  const wrapperStyleObj:BackgroundProps= backgroundUrl?{
    backgroundUrl,backgroundHeight:parseInt((backgroundHeight as any),10)
  }:{};
  
  return (<Wrapper>
    <Container {...wrapperStyleObj }>
      <Person>
        {(showSmallPic&&smallPicUrl)?(<Avatar src={smallPicUrl} alt=''></Avatar>):null}
       <Content>
        <Title>{title} </Title>
        <Desc>{description}</Desc>
       </Content>
      </Person>
    </Container>
        </Wrapper>)
}
const Container = styled.div<BackgroundProps>`
 position: relative;
 height:${props=>props.backgroundHeight}px;
 background-image:url(${props=>props.backgroundUrl});
 background-repeat: no-repeat;
 background-size: contain;
 padding-bottom:150px;
`

const Person = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  height: 150px;
  background: #FFF;
 `
const Avatar = styled.img`
 position: relative;
 top:-70px;
 margin-left:40px;
 left:40px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
 `
const Title = styled.div`
  overflow: hidden;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  margin-left:80px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 28px;
  color:#000
 `
const Desc = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp: 2;
  height: 64px;
  line-height:32px;
  margin-right:30px;
  margin-left:80px;
  font-size:18px;
  color:#333;

 `
 const Content = styled.div`
  flex:1;
 `