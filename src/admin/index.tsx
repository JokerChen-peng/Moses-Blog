
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Routes,Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { Provider, useDispatch } from 'react-redux';
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
import { useState,useEffect} from 'react';
import { Schema } from 'common/type';
import { getChangeSchemaAction } from './store/action';
import axios from 'axios';
import { parseJsonByString } from 'common/utils';
import { UnauthenticatedApp } from './container/Login';
import { useNavigate } from "react-router-dom";
import { getToken } from './container/Login/utils/authProvider';
const { Header, Sider, Content } = Layout;
const useStore =()=>{
  const dispatch = useDispatch()

 const changeSchema =(schema:Schema)=>{
  dispatch(getChangeSchemaAction(schema))
 }

 return {changeSchema}
 }

const useCollapsed =()=>{
  const [collapsed, SetCollapsed] = useState(false);
  const toggleCollapsed = () => {
    SetCollapsed(!collapsed);
  }
  return {collapsed,toggleCollapsed}
  };
const Wrapper =() =>{
  const navigate = useNavigate()
  const {changeSchema} =useStore()
  const {collapsed,toggleCollapsed} = useCollapsed()
  const handleHomePageRedirect = ()=>{
    window.location.href='/'
  }
  useEffect(()=>{
    let token =getToken()
    if(!token){
     navigate("../")
    }
 },[navigate])
  useEffect(()=>{
    axios.get('/api/schema/getLastestOne').then((response)=>{
      const data = response?.data?.data
      data && changeSchema(parseJsonByString(data.schema,{}))
    })
  },[changeSchema])

  return( 
   
      <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['admin-home']}>
        <Menu.Item key="admin-home" icon={<HomeOutlined />}>
          <Link to=''>首页内容管理</Link>
        </Menu.Item>
        <Menu.Item key="admin-basic" icon={<HomeOutlined />}>
        <Link to='basic'>基础内容配置</Link>
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
        <Route path='basic' element={<BasicSetting/>}/>
        <Route path='' element={<HomeManagement/>}/>
      </Routes>       
      </Content>
    </Layout>
  </Layout>
  
  )
}
const HeaderMain =styled(Header)`
 padding: 0 20px ;
`


ReactDOM.render(
  <Provider store={store}>
     <Router>
     <Routes>
        <Route path='/' element={<UnauthenticatedApp/>} />  
        <Route path='setting/*' element={<Wrapper/>}/>
      </Routes> 
      </Router>
  </Provider>,
  document.getElementById('root')
);


