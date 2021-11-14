
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Routes,Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import { HomeManagement } from 'admin/container/HomeManagement';
import { BasicSetting } from './container/BasicSetting';
import 'normalize.css'
import 'antd/dist/antd.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined ,
  RollbackOutlined
} from '@ant-design/icons';

import store from '../admin/store/index';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
const useCollapsed =()=>{
  const [collapsed, SetCollapsed] = useState(false);
  const toggleCollapsed = () => {
    SetCollapsed(!collapsed);
  }
  return {collapsed,toggleCollapsed}
  };
const Wrapper =() =>{
  
  const {collapsed,toggleCollapsed} = useCollapsed()
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }


  return( 
    <Router>
      <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
        <Menu.Item key="admin-home" icon={<HomeOutlined />}>
          <Link to='/'>首页内容管理</Link>
        </Menu.Item>
        <Menu.Item key="admin-basic" icon={<HomeOutlined />}>
        <Link to='/setting'>基础内容配置</Link>
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
      <Routes>
        <Route path='/' element={<HomeManagement/>} />  
        <Route path='/setting' element={<BasicSetting/>}/>
      </Routes>       
      </Content>
    </Layout>
  </Layout>
    </Router>
  )
}
const HeaderMain =styled(Header)`
 padding: 0 20px ;
`


ReactDOM.render(
  <Provider store={store}><Wrapper/></Provider>,
  document.getElementById('root')
);


