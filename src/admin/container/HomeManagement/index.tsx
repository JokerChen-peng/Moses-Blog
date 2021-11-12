import {Schema} from 'common/type'
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Button, Layout, Menu } from 'antd';
import { AreaList } from './component/AreaList';
import { getChangeSchemaAction } from 'admin/container/HomeManagement/store/action'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined ,
  RollbackOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { parseJsonByString } from 'common/utils';

const { Header, Sider, Content } = Layout;

 const useCollapsed =()=>{
  const [collapsed, SetCollapsed] = useState(false);
  const toggleCollapsed = () => {
    SetCollapsed(!collapsed
    );
  };
  return {collapsed,toggleCollapsed}
 }
 const useStore =()=>{
  const dispatch = useDispatch()
  const schema:Schema =useSelector((state)=>{
    return (state as any).homeManagement.schema
 })
 const changeSchema =(schema:Schema)=>{
  dispatch(getChangeSchemaAction(schema))
 }
 return {schema,changeSchema}
 }


export const HomeManagement = () => {
   const {schema,changeSchema} = useStore()
  const {collapsed,toggleCollapsed} = useCollapsed()
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }

  const handleSaveBtnClick = ()=>{
    window.localStorage.schema = JSON.stringify(schema)
    
  }
  const handleResetBtnClick = ()=>{
    changeSchema(parseJsonByString(window.localStorage.schema,{}))
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
         <AreaList/>
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
