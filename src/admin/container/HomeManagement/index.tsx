import {Schema} from 'common/type'
import { useRef, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { AreaList } from './component/AreaList';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined ,
  RollbackOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { parseJsonByString } from 'common/utils';
interface areListRefProps{
  getSchemaList:()=>Schema[];
  resetSchema:()=>void
}
const { Header, Sider, Content } = Layout;
const initalSchema = parseJsonByString(window.localStorage.schema,{})
 const useCollapsed =()=>{
  const [collapsed, SetCollapsed] = useState(false);
  const toggleCollapsed = () => {
    SetCollapsed(!collapsed
    );
  };
  return {collapsed,toggleCollapsed}
 }
export const HomeManagement = () => {
  const {collapsed,toggleCollapsed} = useCollapsed()
  const [schema,setSchema] = useState(initalSchema)
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }

  const areaListRef = useRef<areListRefProps>();
  const handleSaveBtnClick = ()=>{
    const {getSchemaList}  = areaListRef.current as unknown as areListRefProps
    const schema:Schema = {
      id:'Page',
      name:'Page',
      attributes:{},
      children:getSchemaList()
    }
    window.localStorage.schema = JSON.stringify(schema)
  }
  const handleResetBtnClick = ()=>{
    const newSchema =parseJsonByString(window.localStorage.schema,{});
     setSchema(newSchema)
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
          <Menu.Item key="admin-home" icon={<HomeOutlined />}>
            首页内容管理
          </Menu.Item>
          <Menu.Item key="admin-back" icon={<RollbackOutlined />}
           onClick={handleHomePageRedirect}
          >
            返回用户页面
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <HeaderMain>
          {collapsed ? <MenuUnfoldOutlined style={{
            color: '#FFF'
          }}
            onClick={toggleCollapsed} /> : <MenuFoldOutlined style={{
              color: '#FFF'
            }} onClick={toggleCollapsed} />
          }
        </HeaderMain>
        <Content
          style={{
            padding: 20,
            minHeight: 1200,
          }}
        >
         
         <AreaList ref={areaListRef} children={schema.children||[]}/>
         <Buttons>
         <Button type="primary" onClick={handleSaveBtnClick}>保存区块配置</Button>
         <Button type="primary" style={{marginLeft:'20px'}} onClick={handleResetBtnClick}>重置区块配置</Button>
         </Buttons>
        </Content>
      </Layout>
    </Layout>
  );

}

const HeaderMain =styled(Header)`
 padding: 0 20px ;
`
const Buttons =styled.div`
 padding-top: 20px ;
 margin-top: 20px;
 border-top: 1px dashed #ccc;
 text-align:center;
`
