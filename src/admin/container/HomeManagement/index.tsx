
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';

const { Header, Sider, Content } = Layout;
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
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
          <Menu.Item key="admin-home" icon={<UserOutlined />}>
            首页内容管理
          </Menu.Item>
          <Menu.Item key="admin-back" icon={<VideoCameraOutlined />}
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
            margin: '24px 16px',
            padding: 24,
            minHeight: 1000,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );

}

const HeaderMain =styled(Header)`
 padding: 0 20px ;
`