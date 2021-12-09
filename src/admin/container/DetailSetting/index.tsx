
import styled from '@emotion/styled';
import { Button, Input } from 'antd';

export const DetailSetting = () => {


  return (
   <div>
     <Row>
      <div className='title'>
      页面id
      </div>
       <div className='content'>
         <Input/>
       </div>
     </Row>
    </div>)
 

}

const Row = styled.div`
 margin-bottom:20px;
 display: flex;
 .title{
   width:100px;
   line-height: 32px;
 }
 .content{
   flex: 1;
 }
`
